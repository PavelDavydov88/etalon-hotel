import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {DateOnlyDataType} from "sequelize";
import {Profile} from "../profile/profile.model";
import {Apartment} from "./apartment.model";
import {ApiProperty} from "@nestjs/swagger";

interface HotelProfileAttrs {
    idApartment: number,

    idProfile: number,

    checkin: DateOnlyDataType,

    checkout: DateOnlyDataType,

}

@Table({tableName: 'hotelProfile', createdAt: false, updatedAt: false})
export class HotelProfile extends Model<HotelProfile, HotelProfileAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный индефикатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    id: number;

    @ApiProperty({ example: '1', description: 'внешний ключ, ссылкается на Apartment' })
    @ForeignKey(() => Apartment)
    @Column({type: DataType.INTEGER})
    idApartment: number;

    @BelongsTo(() => Apartment)
    apartment: Apartment;

    @ApiProperty({ example: '1', description: 'внешний ключ, ссылкается на Profile' })
    @ForeignKey(() => Profile)
    @Column({type: DataType.INTEGER})
    idProfile: number;

    @BelongsTo(() => Profile)
    profile: Profile;

    @ApiProperty({ example: '2023-07-23', description: 'дата заезда гггг-мм-дд' })
    @Column({type: DataType.DATEONLY})
    checkin: Date;

    @ApiProperty({ example: '2023-07-30', description: 'дата выезда гггг-мм-дд' })
    @Column({type: DataType.DATEONLY})
    checkout: Date;

}