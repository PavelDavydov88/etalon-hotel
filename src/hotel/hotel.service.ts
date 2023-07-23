import {Hotel} from "./hotel.model";
import {InjectModel} from "@nestjs/sequelize";
import {HotelProfile} from "./hotel-user.model";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import sequelize, {Op} from "sequelize";
import {CreateHotelProfileDto} from "./dto/createHotelProfile.dto";
import {Apartment} from "./apartment.model";
import {CheckDateDto} from "./dto/checkDate.dto";
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {Profile} from "../profile/profile.model";
import {UserRoles} from "../roles/user-roles.model";

@Injectable()
export class HotelService {

    constructor(@InjectModel(Apartment) private apartmentRepository: typeof Apartment,
                @InjectModel(HotelProfile) private hotelProfileRepository: typeof HotelProfile,
                @InjectModel(Hotel) private hotelRepository: typeof Hotel,
                @InjectModel(Profile) private profileRepository: typeof Profile,
                @InjectModel(UserRoles) private userRoleRepository: typeof UserRoles,
                private jwtService: JwtService,
    ) {
    }

    async creatHotelProfile(dto: CreateHotelProfileDto) {
        const idHotel = await this.apartmentRepository.findOne({where: {id: dto.idApartment}, attributes: ["idHotel"]});
        const arrayFreeApart = await this.getArrayFreeApart({
            idHotel: idHotel.idHotel,
            checkout: dto.checkout.toString(dto.checkout),
            checkin: dto.checkin.toString(dto.checkin)
        });
        if (!arrayFreeApart.includes(dto.idApartment)) return "you can't book on these dates";
        const createHotelProfile = await this.hotelProfileRepository.create(dto);
        return createHotelProfile;
    }

    async deleteBooking(req: Request, bookingId: number) {
        const authHeader = req.headers["authorization"];
        const token = authHeader.split(' ')[1];
        const userAuth = this.jwtService.verify<CreateUserDto>(token);
        const profileRepository = await this.profileRepository.findOne({where: {login: userAuth.login}})
        const roleIdUserAuth = await this.userRoleRepository.findOne({where: {userId: profileRepository.userId}})
        const hotelProfileRepository = await this.hotelProfileRepository.findOne({where: {id: bookingId}})
        if (!hotelProfileRepository) {
            throw new UnauthorizedException({message: `This booking doesn't exist`})
        }
        if (roleIdUserAuth.roleId != 1 && profileRepository.id !== hotelProfileRepository.idProfile) {
            throw new UnauthorizedException({message: `User hasn\'t authorities`})
        }
        await this.hotelProfileRepository.destroy({where: {id: bookingId}});
        return "the booking has been deleted"
    }

    async getAllApartment(id: number) {
        return await this.apartmentRepository.findAll({
            where: {idHotel: id}
        })
    }

    async getFreeApartment(checkDateDto: CheckDateDto) {
        const arrayFreeIdApart = await this.getArrayFreeApart(checkDateDto)
        return await this.apartmentRepository.findAll(
            {where: {id: arrayFreeIdApart}}
        )
    }

    private async getArrayFreeApart(checkDateDto: CheckDateDto) {
        const listApart = await this.apartmentRepository.findAll({
            where: {idHotel: checkDateDto.idHotel},
            attributes: ["id"], raw: true
        })
        const arrayIdApart: number[] = listApart.map(id => id.id);
        console.log("arrayIdApart= " + arrayIdApart)
        const listOrderedApart = await this.hotelProfileRepository.findAll({
            where: {
                [Op.or]: [{checkin: {[Op.between]: [checkDateDto.checkin, checkDateDto.checkout]}}, {checkout: {[Op.between]: [checkDateDto.checkin, checkDateDto.checkout]}}]
            },
            attributes: [[sequelize.fn("DISTINCT", sequelize.col("idApartment")), "idApartment"]],
            raw: true
        })
        const arrayOrderedIdApart: number[] = listOrderedApart.map(id => id.idApartment);
        console.log("arrayOrderedIdApart= " + arrayOrderedIdApart)
        const arrayFreeIdApart = arrayIdApart.filter(apart => !arrayOrderedIdApart.includes(apart))
        console.log("arrayFreeIdApart= " + arrayFreeIdApart)
        return arrayFreeIdApart;
    }

}
