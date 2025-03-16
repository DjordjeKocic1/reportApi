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
exports.CurrentUserInterceptor = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users.service");
const jwt_1 = require("@nestjs/jwt");
let CurrentUserInterceptor = class CurrentUserInterceptor {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        const decode = await this.jwtService.decode(token);
        const user = await this.userService.findOne(decode.username);
        if (user) {
            request.currentUser = user;
        }
        return next.handle();
    }
    extractTokenFromHeader(request) {
        const authHeader = request.headers['authorization'];
        if (!authHeader)
            return undefined;
        const [type, token] = authHeader.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
};
exports.CurrentUserInterceptor = CurrentUserInterceptor;
exports.CurrentUserInterceptor = CurrentUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService, jwt_1.JwtService])
], CurrentUserInterceptor);
//# sourceMappingURL=current-user.interceptor.js.map