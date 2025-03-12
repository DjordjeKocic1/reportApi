import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {

    throw new UnprocessableEntityException("Hello guard")
  }
}
