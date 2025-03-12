import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./users.schema";
import { UserDto } from "./dtos/users.dto";
import { AuthService } from "../auth/auth.service";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { CurrentUser } from "./decorators/current-user.decorator";
import { AuthGuard } from "src/guards/auth.guard";

@Controller('users')
@Serialize(UserDto)
@UseGuards(AuthGuard)
export class UsersController {
    constructor(public userService: UserService, public authService: AuthService) {}

    @Get("/whoami/:username")
    whoami(@CurrentUser() user: User) {
        return user;
    }

    @Get("/:username")
    getUser(@Param("username") username: string) {
        return this.userService.findOne(username);
    }

    @Put("/:id")
    updateUser(@Param("id") id: string, @Body() user: User) {
        return this.userService.update(id, user);
    }

}