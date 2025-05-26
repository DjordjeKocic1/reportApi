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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reports_schema_1 = require("./reports.schema");
const users_schema_1 = require("../users/users.schema");
let ReportsService = class ReportsService {
    constructor(reports, user) {
        this.reports = reports;
        this.user = user;
    }
    async findAll(userId) {
        const reports = await this.reports.find({ userId });
        return reports;
    }
    async findOne(id) {
        const report = await this.reports.findById({ _id: id });
        return report;
    }
    async create(reportPayload) {
        const report = new this.reports(reportPayload);
        const user = await this.user.findById(reportPayload.userId);
        if (!user)
            throw new common_1.UnauthorizedException("User not found");
        user.reports.push(report);
        await user.save();
        return await report.save();
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reports_schema_1.Report.name)),
    __param(1, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ReportsService);
//# sourceMappingURL=reports.service.js.map