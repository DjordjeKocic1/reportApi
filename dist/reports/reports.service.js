"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
class ReportsService {
    async findAll() {
        return "All reports";
    }
    async findOne(id) {
        return `Report ${id}`;
    }
    async create(payload) {
        return payload;
    }
}
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map