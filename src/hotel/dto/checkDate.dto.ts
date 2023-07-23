import {ApiProperty} from "@nestjs/swagger";

export class CheckDateDto {

    @ApiProperty({ example: '1', description: 'Id отеля' })
    idHotel: number;

    @ApiProperty({ example: '2023-07-23', description: 'дата заезда гггг-мм-дд' })
    checkin: string;

    @ApiProperty({ example: '2023-07-31', description: 'дата выезда гггг-мм-дд' })
    checkout: string;

}