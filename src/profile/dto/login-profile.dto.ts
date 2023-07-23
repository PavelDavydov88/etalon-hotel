import {ApiProperty} from "@nestjs/swagger";

export class LoginProfileDto {

    @ApiProperty({ example: 'Vasiy', description: 'логин' })
    readonly login: string;

    @ApiProperty({ example: '123', description: 'пароль' })
    readonly password: string;


}