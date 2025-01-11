import { UserService } from "./users.service";
export declare class UsersController {
    userService: UserService;
    constructor(userService: UserService);
    getUsers(): Promise<string>;
    getUser(id: string): Promise<string>;
    createUser(body: any): Promise<any>;
}
