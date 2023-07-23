import {ApiProperty} from "@nestjs/swagger";

export class CreateProfileDto {

    @ApiProperty({ example: 'Vasiy', description: 'логин' })
    readonly login: string;

    @ApiProperty({ example: '123', description: 'пароль' })
    readonly password: string;

    @ApiProperty({ example: 'Vasiy', description: 'Имя' })
    readonly firstName: string;

    @ApiProperty({ example: 'Vasiliev', description: 'Фамилия' })
    readonly secondName: string;

    @ApiProperty({ example: '+7912', description: 'телефон' })
    readonly telephone: string;

    readonly userId: string;

    @ApiProperty({ example: 'true', description: 'VIP клиент' })
    readonly vip: boolean;

}