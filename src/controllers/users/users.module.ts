import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UsersSchema } from "./users.schema";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { AuthService } from "../auth/auth.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UserService,
    AuthService
  ],
})
export class UsersModule {}
