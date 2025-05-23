"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const util_1 = require("util");
const enums_1 = require("../../types/enums");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(username, password) {
        const user = await this.userService.findOne(username);
        if (!user) {
            throw new common_1.NotFoundException(enums_1.ErrorMessages.USER_NOT_FOUND);
        }
        const [salt, storedHash] = user.password.split(".");
        const hash = await scrypt(password, salt, 32);
        if (hash.toString("hex") !== storedHash) {
            throw new common_1.BadGatewayException(enums_1.ErrorMessages.BAD_PASSWORD);
        }
        const payload = {
            username: user.username
        };
        const access_token = await this.jwtService.signAsync(payload);
        const d = await this.jwtService.decode(access_token);
        return { access_token };
    }
    async signUp(username, password) {
        const userExits = await this.userService.findOne(username);
        if (userExits) {
            throw new common_1.BadGatewayException(enums_1.ErrorMessages.USER_ALREADY_EXISTS);
        }
        const salt = (0, crypto_1.randomBytes)(8).toString("hex");
        const hash = (await scrypt(password, salt, 32));
        const result = salt + "." + hash.toString("hex");
        const user = await this.userService.create(username, result);
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map