"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = void 0;
const class_transformer_1 = require("class-transformer");
const operators_1 = require("rxjs/operators");
const report_dto_1 = require("../reports/dtos/report.dto");
class SerializeInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            return (0, class_transformer_1.plainToClass)(report_dto_1.ReportDto, data, { excludeExtraneousValues: true });
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map