"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const main_module_1 = require("./main.module");
const pipes_1 = require("@nestjs/common/pipes");
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.AppModule);
    app.useGlobalPipes(new pipes_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map