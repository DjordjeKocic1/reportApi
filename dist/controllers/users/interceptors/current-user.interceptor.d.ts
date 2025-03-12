import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { UserService } from "../users.service";
export declare class CurrentUserInterceptor implements NestInterceptor {
    private userService;
    constructor(userService: UserService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<import("rxjs").Observable<any>>;
}
