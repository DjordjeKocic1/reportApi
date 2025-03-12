import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { User, UsersSchema } from "../users/users.schema";
import { UserService } from "../users/users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService
  ],
})
export class AuthModule {}
