import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "src/decorators/roles.decorator";
import { Role } from "src/types/enums";
import { extractTokenFromHeader } from "./utils/token.utils";
import { UserService } from "src/controllers/users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);
    const decode = this.jwtService.decode(token);
    const user = await this.userService.findOne(decode.username);

    if (!requiredRoles) {
      return true;
    }

    if(!requiredRoles.includes(user.role)){
        throw new UnauthorizedException("Access denied");
    }

    return true;
  }
}
