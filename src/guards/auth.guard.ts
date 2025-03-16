import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "src/constants/auth";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if(!token) {
      throw new UnauthorizedException("Token not found");
    }

    try {
      await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
    } catch (error) {
      throw new UnauthorizedException("Invalid token");
    }
      
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers['authorization'];

    if (!authHeader) return undefined;
    
    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
