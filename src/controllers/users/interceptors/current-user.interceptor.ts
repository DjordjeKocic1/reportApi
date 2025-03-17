import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { UserService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
import { extractTokenFromHeader } from "src/guards/utils/auth.utils";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);
    const decode = this.jwtService.decode(token);
    const user = await this.userService.findOne(decode.username);

    if(user) {
      request.currentUser = user;
    }

    return next.handle()
  }
}
