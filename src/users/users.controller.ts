import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./users.schema";
import { UserDto } from "./dtos/users.dto";
import { AuthService } from "./auth.service";
import { Serialize } from "src/interceptors/serialize.interceptor";

@Controller('users')
@Serialize(UserDto)
export class UsersController {
    constructor(public userService: UserService, private authService: AuthService) {}

    @Get("/:id")
    getUser(@Param("id") id: string) {
        return this.userService.findOne(id);
    }

    @Post('/signup')
    createUser(@Body() body: UserDto) {
        return this.authService.signUp(body.username, body.password);
    }

    @Post("/signin")
    signIn(@Body() body: UserDto) {
        return this.authService.signIn(body.username, body.password);
    }

    @Put("/:id")
    updateUser(@Param("id") id: string, @Body() user: User) {
        return this.userService.update(id, user);
    }

}