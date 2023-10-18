import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Repository } from "sequelize-typescript";
import { getFetch } from "src/config/genOption.config";
import { UserCreateDto } from "src/users/dto/user-create.dto";
import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/user.model";


@Injectable()
export class UserService {
  constructor (@InjectModel(User) private userRepository: Repository<User>) {}

  async getAll() {    
    return this.userRepository.findAll()
  } 

  async create(dto: UserCreateDto) {
    const user = await this.userRepository.create(dto)
    await getFetch(`/create`, 'POST', { user_id: user.id, action: 'Пользователь создан' })
    return user
  }
 
  async update(id: number, dto: UserDto) {
    const user = await this.userRepository.findOne({where: {id}});

    if (!user) {
      throw new NotFoundException('User not found');
    }
    
    await this.userRepository.update(dto, { where: { id }, returning: true })

    await getFetch(`/create`, 'POST', { user_id: id, action: 'Пользователь изменен' })
    return await this.userRepository.findOne({ where: { id } });
  }
}