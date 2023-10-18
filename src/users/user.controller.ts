import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserCreateDto } from "src/users/dto/user-create.dto";
import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/user.model";
import { UserService } from "src/users/user.service";

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get('/all')
  getAll() {    
    return this.userService.getAll()
  }

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: UserCreateDto})
  @Post('/create')
  create(@Body() dto: UserCreateDto) {
    return this.userService.create(dto)
  }

  @ApiOperation({summary: 'Обновление пользователя'})
  @ApiResponse({status: 200, type: User})
  @Put('/update/:id')
  update(
    @Param('id') id: number,
    @Body() dto: UserDto
  ) {
    return this.userService.update(id, dto)
  }
}