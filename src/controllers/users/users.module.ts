import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UsersSchema } from "./users.schema";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { AuthService } from "../auth/auth.service";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { AuthGuard } from "src/guards/auth.guard";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    { provide: APP_INTERCEPTOR, useClass: CurrentUserInterceptor },
  ],
})
export class UsersModule {}
