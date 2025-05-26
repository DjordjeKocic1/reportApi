import { UserService } from "./users.service";
import { User } from "./users.schema";
import { UserDto } from "./dtos/users.dto";
import { AuthService } from "../auth/auth.service";
export declare class UsersController {
    userService: UserService;
    authService: AuthService;
    constructor(userService: UserService, authService: AuthService);
    updateUser(id: string, user: UserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
