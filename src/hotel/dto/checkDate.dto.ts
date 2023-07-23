import {DateOnlyDataType} from "sequelize";

export class CreateHotelProfileDto {

    idApartment: number;

    idProfile: number;

    checkin: DateOnlyDataType;
    checkout: DateOnlyDataType;

}