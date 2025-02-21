import { UserService } from "./users.service";
import { User } from "./users.schema";
import { UserDto } from "./dtos/users.dto";
import { AuthService } from "./auth.service";
export declare class UsersController {
    userService: UserService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    getUser(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    createUser(body: UserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    signIn(body: UserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateUser(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
