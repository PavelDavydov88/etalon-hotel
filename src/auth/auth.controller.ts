import {Body, Controller, Post} from '@nestjs/common';
import {CreateProfileDto} from "../profile/dto/create-profile.dto";
import {AuthService} from "./auth.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LoginProfileDto} from "../profile/dto/login-profile.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService) {}
    @ApiOperation({ summary: " Залогиниться" })
    @ApiResponse({ status: 200, })
    @Post('/login')
    login(@Body() profileDto : LoginProfileDto){
        return this.authService.login(profileDto);
    }

    @ApiOperation({ summary: " Регистрация" })
    @ApiResponse({ status: 200, })
    @Post('/registration')
    registration(@Body() profileDto : CreateProfileDto){
        return this.authService.registration(profileDto);
    }
}
