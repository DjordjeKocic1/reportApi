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
exports.TokenGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_1 = require("../constants/auth");
const token_utils_1 = require("./utils/token.utils");
let TokenGuard = class TokenGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = (0, token_utils_1.extractTokenFromHeader)(request);
        if (!token) {
            throw new common_1.UnauthorizedException("Token not found");
        }
        try {
            await this.jwtService.verifyAsync(token, {
                secret: auth_1.jwtConstants.secret
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Invalid token");
        }
        return true;
    }
};
exports.TokenGuard = TokenGuard;
exports.TokenGuard = TokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], TokenGuard);
//# sourceMappingURL=token.guard.js.map