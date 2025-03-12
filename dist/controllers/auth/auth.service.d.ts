import { JwtService } from '@nestjs/jwt';
import { UserService } from "../users/users.service";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<{
        access_token: string;
    }>;
    signUp(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("../users/users.schema").User> & import("../users/users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
