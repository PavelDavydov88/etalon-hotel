import {DateOnlyDataType} from "sequelize";
import {ApiProperty} from "@nestjs/swagger";

export class CreateHotelProfileDto {

    @ApiProperty({ example: '1', description: 'Id номера' })
    idApartment: number;

    @ApiProperty({ example: '1', description: 'Id клиента' })
    idProfile: number;

    @ApiProperty({ example: '2023-07-23', description: 'дата заезда гггг-мм-дд' })
    checkin: DateOnlyDataType;

    @ApiProperty({ example: '2023-07-30', description: 'дата выезда гггг-мм-дд' })
    checkout: DateOnlyDataType;

}