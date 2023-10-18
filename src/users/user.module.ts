import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserController } from "src/users/user.controller";
import { User } from "src/users/user.model";
import { UserService } from "src/users/user.service";

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
