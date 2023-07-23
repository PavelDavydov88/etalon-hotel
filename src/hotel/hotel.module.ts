import {SequelizeModule} from "@nestjs/sequelize";
import {Module} from "@nestjs/common";
import {Hotel} from "./hotel.model";
import {HotelProfile} from "./hotel-user.model";
import {HotelService} from "./hotel.service";
import {HotelController} from "./hotel.controller";
import {Apartment} from "./apartment.model";
import {AuthModule} from "../auth/auth.module";
import {Profile} from "../profile/profile.model";
import {UserRoles} from "../roles/user-roles.model";

@Module({
    providers: [HotelService],
    controllers: [HotelController],
    imports: [
        SequelizeModule.forFeature([Hotel, HotelProfile, Apartment, Profile, UserRoles]),
        AuthModule,
    ],
    exports: []

})
export class HotelModule {
}
