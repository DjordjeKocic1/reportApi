import { UserService } from "./users.service";
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signIn(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("./users.schema").User> & import("./users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    signUp(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("./users.schema").User> & import("./users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
