"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTokenFromHeader = void 0;
const extractTokenFromHeader = (request) => {
    const authHeader = request.headers["authorization"];
    if (!authHeader)
        return undefined;
    const [type, token] = authHeader.split(" ");
    return type === "Bearer" ? token : undefined;
};
exports.extractTokenFromHeader = extractTokenFromHeader;
//# sourceMappingURL=token.utils.js.map