import { ApiProperty } from "@nestjs/swagger"

export class UserCreateDto {
  @ApiProperty({example: 'Александр', description: 'Имя'})
  readonly name: string

  @ApiProperty({example: 'Шатайлов', description: 'Фамилия'})
  readonly sername: string
}