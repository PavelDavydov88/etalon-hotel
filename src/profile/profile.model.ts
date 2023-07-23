import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {ApiProperty} from "@nestjs/swagger";

interface ProfileCreationAttrs {
    firstName: string;
    secondName: string;
    telephone: string;
    login: string;
    userId: number;
}

@Table({tableName: 'profile', createdAt: false, updatedAt: false})
export class Profile extends Model<Profile, ProfileCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Уникальный индефикатор' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Vasiy', description: 'Имя' })
    @Column({type: DataType.STRING})
    firstName: string;

    @ApiProperty({ example: 'Vasiliev', description: 'Фамилия' })
    @Column({type: DataType.STRING})
    secondName: string;

    @ApiProperty({ example: '+7912', description: 'телефон' })
    @Column({type: DataType.STRING})
    telephone: string;

    @ApiProperty({ example: 'Vasiy', description: 'логин' })
    @Column({type: DataType.STRING})
    login: string;

    @ApiProperty({ example: '1', description: 'внешний ключ, ссылкается на User' })
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ApiProperty({ example: 'true', description: 'VIP клиент' })
    @Column({type: DataType.BOOLEAN,})
    vip: boolean;

}