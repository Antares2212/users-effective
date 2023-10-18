import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
  @ApiProperty({example: 'Александр', description: 'Имя'})
  readonly name: string

  @ApiProperty({example: 'Шатайлов', description: 'Фамилия'})
  readonly sername: string

  @ApiProperty({example: '18.11.2000', description: 'Уникальный идентификатор'})
  readonly birthday: Date

  @ApiProperty({example: '18', description: 'Возраст'})
  readonly age: number

  @ApiProperty({example: 'Alakey812@yandex.ru', description: 'Почтовый адрес'})
  readonly email: string
}