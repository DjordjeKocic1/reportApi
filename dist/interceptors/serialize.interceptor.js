"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = exports.Serialize = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const operators_1 = require("rxjs/operators");
const Serialize = (dto) => (0, common_1.UseInterceptors)(new SerializeInterceptor(dto));
exports.Serialize = Serialize;
class SerializeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            return (0, class_transformer_1.plainToInstance)(this.dto, data, { excludeExtraneousValues: true });
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map