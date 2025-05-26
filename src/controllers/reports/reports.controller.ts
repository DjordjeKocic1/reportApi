import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { ReportDto } from "./dtos/report.dto";
import { TokenGuard } from "src/guards/token.guard";
import { CurrentUser } from "../users/decorators/current-user.decorator";
import { CurrentUserInterceptor } from "../users/interceptors/current-user.interceptor";

@Controller('reports')
@UseGuards(TokenGuard)
@UseInterceptors(CurrentUserInterceptor)
export class ReportsController {
    constructor(public reportsService: ReportsService) {}
    @Get()
    getReports(@CurrentUser() userId: string) {
        return this.reportsService.findAll(userId);
    }

    @Get('/:id')
    getReport(@Param('id') id: string) {
        return this.reportsService.findOne(id);
    }
    
    @Post()
    createReport(@Body() report: ReportDto) {
        return this.reportsService.create(report);
    }

}