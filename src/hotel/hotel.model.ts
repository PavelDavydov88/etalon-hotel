import {Column, DataType, Model, Table} from "sequelize-typescript";

interface HotelAttrs {
    name: string,

    descriptionHotel: string,

}

@Table({tableName: 'hotel', createdAt: false, updatedAt: false})
export class Hotel extends Model<Hotel, HotelAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    id: number;

    @Column({type: DataType.STRING,})
    name: string;

    @Column({type: DataType.STRING})
    descriptionHotel: string;

}