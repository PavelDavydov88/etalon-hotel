import {Column, DataType, Model, Table} from "sequelize-typescript";

interface HotelAttrs {
    name: string,

    numberApartment: number,

    descriptionApartment: string,

    free : boolean,

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

    @Column({type: DataType.INTEGER})
    numberApartment: number;

    @Column({type: DataType.STRING})
    descriptionApartment: string;

}