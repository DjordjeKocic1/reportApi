import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(public userService: UserService) {}
    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    createUser(@Body() body: any) {
        return this.userService.create(body);
    }

}