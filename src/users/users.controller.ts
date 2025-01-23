import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./users.schema";

@Controller('users')
export class UsersController {
    constructor(public userService: UserService) {}
    @Get("/:id")
    getUser(@Param("id") id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    createUser(@Body() user: User) {
        return this.userService.signIn(user);
    }

    @Put("/:id")
    updateUser(@Param("id") id: string, @Body() user: User) {
        return this.userService.update(id, user);
    }

}