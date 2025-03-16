"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const auth_1 = require("./constants/auth");
const reports_module_1 = require("./controllers/reports/reports.module");
const users_module_1 = require("./controllers/users/users.module");
const auth_module_1 = require("./controllers/auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://djordjereports:djole1989@reports.p6ovw.mongodb.net/?retryWrites=true&w=majority&appName=Reports"),
            jwt_1.JwtModule.register({
                global: true,
                secret: auth_1.jwtConstants.secret,
                signOptions: { expiresIn: "10h" },
            }),
            reports_module_1.ReportsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ]
    })
], AppModule);
//# sourceMappingURL=main.module.js.map