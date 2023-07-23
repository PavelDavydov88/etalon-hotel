import {Body, Controller, Delete, Get, Param, Post, Query, Request, UseGuards} from "@nestjs/common";
import {HotelService} from "./hotel.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateHotelProfileDto} from "./dto/createHotelProfile.dto";
import {CheckDateDto} from "./dto/checkDate.dto";
import {Roles} from "../auth/role-auth.decorator";
import {RoleGuard} from "../auth/role.guard";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Apartment} from "./apartment.model";
import {HotelProfile} from "./hotel-user.model";

@ApiTags('hotel')
@Controller('hotel')
export class HotelController {

    constructor(private hotelService: HotelService) {
    }

    @ApiOperation({ summary: " Забронировать номер" })
    @ApiResponse({ status: 200, type: HotelProfile })
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createHotelProfileDto: CreateHotelProfileDto) {
        return this.hotelService.creatHotelProfile(createHotelProfileDto)
    }

    @ApiOperation({ summary: " Получить все номера по Id отеля" })
    @ApiResponse({ status: 200, type: Apartment })
    @Get("/:id")
    getAll(@Param("id") id: number) {
        return this.hotelService.getAllApartment(id);
    }
    @ApiOperation({ summary: " Получить все свободные номера отеля на определенный период времени" })
    @ApiResponse({ status: 200, type: Apartment })
    @Get()
    checkDate(@Query() checkDateDto: CheckDateDto) {
        return this.hotelService.getFreeApartment(checkDateDto);
    }

    @ApiOperation({ summary: " Удалить бронь номера" })
    @ApiResponse({ status: 200, description : "the booking has been deleted" })
    @Roles("ADMIN", "USER")
    @UseGuards(RoleGuard)
    @Delete("/:id")
    remove(@Request() req: Request, @Param("id") id: number) {
        return this.hotelService.deleteBooking(req, id);
    }

}
