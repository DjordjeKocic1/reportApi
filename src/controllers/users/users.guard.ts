import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { UserService } from "./users.service";

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const username = request.body.username;
    const user = await this.userService.findOne(username);
    if (user) throw new UnprocessableEntityException("User already exists");
    return true;
  }
}
