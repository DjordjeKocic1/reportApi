import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { UserService } from "../users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const decode = await this.jwtService.decode(token);
    const user = await this.userService.findOne(decode.username);

    if(user) {
      request.currentUser = user;
    }


    return next.handle()
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers['authorization'];

    if (!authHeader) return undefined;
    
    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
