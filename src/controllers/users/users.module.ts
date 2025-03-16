import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UsersSchema } from "./users.schema";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "src/guards/auth.guard";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    CurrentUserInterceptor
  ],
})
export class UsersModule {}
