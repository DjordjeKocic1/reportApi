import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { UserDto } from "../users/dtos/users.dto";
import { UserService } from "../users/users.service";
import { AuthService } from "./auth.service";


@Controller('users')
@Serialize(UserDto)
export class AuthController {
    constructor(public userService: UserService, public authService: AuthService) {}

    @Post('/signup')
    createUser(@Body() body: UserDto) {
        return this.authService.signUp(body.username, body.password);
    }

    @Post("/signin")
    signIn(@Body() body: UserDto) {
        return this.authService.signIn(body.username, body.password);
    }

}