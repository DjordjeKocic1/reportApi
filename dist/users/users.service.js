"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    async findAll() {
        return "All users";
    }
    async findOne(id) {
        return `User ${id}`;
    }
    async create(payload) {
        return payload;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map