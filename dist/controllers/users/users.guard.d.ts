import { CanActivate, ExecutionContext } from "@nestjs/common";
import { UserService } from "./users.service";
export declare class UsersGuard implements CanActivate {
    private userService;
    constructor(userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
