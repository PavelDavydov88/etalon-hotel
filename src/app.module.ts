import {Module} from '@nestjs/common';
import * as process from "process";
import {User} from "./user/user.model";
import {Profile} from "./profile/profile.model";
import {Role} from "./roles/role.model";
import {UserRoles} from "./roles/user-roles.model";
import {ProfileModule} from "./profile/profile.module";
import {UserModule} from "./user/user.module";
import {RolesModule} from "./roles/roles.module";
import {AuthModule} from "./auth/auth.module";
import {AuthController} from "./auth/auth.controller";
import {AuthService} from "./auth/auth.service";
import {JwtService} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {HotelModule} from "./hotel/hotel.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService,
        JwtService,
    ],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Profile, Role, UserRoles,],
            autoLoadModels: true,
        }),
        ProfileModule, UserModule, RolesModule, AuthModule, HotelModule
    ]
})
export class AppModule {
}
