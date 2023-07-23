import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Hotel} from "./hotel.model";
import {ApiProperty} from "@nestjs/swagger";

interface ApartmentAttrs {

    idHotel: number,

    nameApartment: string,

    numberApartment: number,

    descriptionApartment: string,

}

@Table({tableName: 'apartment', createdAt: false, updatedAt: false})
export class Apartment extends Model<Apartment, ApartmentAttrs> {
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

    @ApiProperty({ example: 'Стандарт', description: 'Название номера' })
    @Column({type: DataType.STRING,})
    nameApartment: string;

    @ApiProperty({ example: '101', description: 'Номер апартамента' })
    @Column({type: DataType.INTEGER})
    numberApartment: number;

    @ApiProperty({ example: 'Двухместный', description: 'Описание номера' })
    @Column({type: DataType.STRING})
    descriptionApartment: string;

    @ApiProperty({ example: '1', description: 'внешний ключ, ссылкается на Hotel' })
    @ForeignKey(() => Hotel)
    @Column({type: DataType.INTEGER})
    idHotel: number;

    @BelongsTo(() => Hotel)
    hotel: Hotel;

}