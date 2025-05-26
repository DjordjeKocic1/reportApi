import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./users.schema";
import { UserDto } from "./dtos/users.dto";
import { AuthService } from "../auth/auth.service";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { TokenGuard } from "src/guards/token.guard";

@Controller('users')
@Serialize(UserDto)
@UseGuards(TokenGuard)
export class UsersController {
    constructor(public userService: UserService, public authService: AuthService) {}

    @Put("/:id")
    updateUser(@Param("id") id: string, @Body() user: UserDto) {
        return this.userService.update(id, user);
    }

}