import { BadGatewayException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { ErrorMessages } from "src/types/enums";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

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

        return user;
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