import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";

interface UserCreationAttrs {
  name: string
  sername: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'Alakey812@yandex.ru', description: 'Почтовый адрес'})
  @Column({type: DataType.STRING, unique: true})
  email: string

  @ApiProperty({example: 'Александр', description: 'Имя'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'Шатайлов', description: 'Фамилия'})
  @Column({type: DataType.STRING})
  sername: string

  @ApiProperty({example: '18.11.2000', description: 'Уникальный идентификатор'})
  @Column({type: DataType.DATE})
  birthday: Date

  @ApiProperty({example: '18', description: 'Возраст'})
  @Column({type: DataType.INTEGER})
  age: number
}