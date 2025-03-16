import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { UserService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
export declare class CurrentUserInterceptor implements NestInterceptor {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<import("rxjs").Observable<any>>;
    private extractTokenFromHeader;
}
