import { UserDto } from "../users/dtos/users.dto";
import { UserService } from "../users/users.service";
import { AuthService } from "./auth.service";
export declare class AuthController {
    userService: UserService;
    authService: AuthService;
    constructor(userService: UserService, authService: AuthService);
    createUser(body: UserDto): Promise<import("mongoose").Document<unknown, {}, import("../users/users.schema").User> & import("../users/users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    signIn(body: UserDto): Promise<{
        access_token: string;
    }>;
}
