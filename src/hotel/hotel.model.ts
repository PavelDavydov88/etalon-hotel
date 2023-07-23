import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface HotelAttrs {
    name: string,

    descriptionHotel: string,

}

@Table({tableName: 'hotel', createdAt: false, updatedAt: false})
export class Hotel extends Model<Hotel, HotelAttrs> {
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
    @ApiProperty({ example: 'Курган', description: 'Назвнаие отеля' })
    @Column({type: DataType.STRING,})
    name: string;

    @ApiProperty({ example: '3*', description: 'Описание отеля' })
    @Column({type: DataType.STRING})
    descriptionHotel: string;

}