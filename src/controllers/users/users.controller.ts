import { Body, Controller, Get, Param, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./users.schema";
import { UserDto } from "./dtos/users.dto";
import { AuthService } from "../auth/auth.service";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { CurrentUser } from "./decorators/current-user.decorator";
import { AuthGuard } from "src/guards/auth.guard";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";

@Controller('users')
@Serialize(UserDto)
@UseGuards(AuthGuard)
@UseInterceptors(CurrentUserInterceptor)
export class UsersController {
    constructor(public userService: UserService, public authService: AuthService) {}

    @Get("/")
    getUser(@CurrentUser() current: any) {
        return current;
    }

    @Put("/:id")
    updateUser(@Param("id") id: string, @Body() user: User) {
        return this.userService.update(id, user);
    }

}