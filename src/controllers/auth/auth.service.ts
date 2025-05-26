import { BadGatewayException, Injectable, NotFoundException } from "@nestjs/common";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { ErrorMessages } from "src/types/enums";
import { JwtService } from '@nestjs/jwt';
import { UserService } from "../users/users.service";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private userService: UserService,private jwtService: JwtService) {}

    async signIn(username: string, password: string) {
        const user = await this.userService.findOne(username);
        if(!user) {
            throw new NotFoundException(ErrorMessages.USER_NOT_FOUND);
        }

        const [salt, storedHash] = user.password.split(".");
        const hash = await scrypt(password, salt, 32) as Buffer;

        if(hash.toString("hex") !== storedHash) {
            throw new BadGatewayException(ErrorMessages.BAD_PASSWORD);
        }

        const payload = { 
            id: user._id,
            username: user.username
        }

        const access_token = await this.jwtService.signAsync(payload);

        return { access_token };
    }

    async signUp(username: string, password: string) {
        const userExits = await this.userService.findOne(username);
        if(userExits) {
            throw new BadGatewayException(ErrorMessages.USER_ALREADY_EXISTS);
        }

        const salt = randomBytes(8).toString("hex");
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        const result = salt + "." + hash.toString("hex");

        const user = await this.userService.create(username, result);

        return user;
    }
}