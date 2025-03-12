import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { UserService } from "../users.service";
import { map } from "rxjs/operators";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UserService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { username } = request.params;

    if (username) {
      const user = await this.userService.findOne(username);
      request.currentUser = user;
    }

    return next.handle()
  }
}
