import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { ReportDto } from "./dtos/report.dto";
import { TokenGuard } from "src/guards/token.guard";
import { CurrentUser } from "../users/decorators/current-user.decorator";
import { CurrentUserInterceptor } from "../users/interceptors/current-user.interceptor";
import { ReportStatusDto } from "./dtos/report-status.dto";
import { RolesGuard } from "src/guards/roles.guard";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/types/enums";

@Controller('reports')
@UseGuards(TokenGuard, RolesGuard)
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
    createReport(@Body() report: ReportDto, @CurrentUser() userId: string) {
        return this.reportsService.create(report, userId);
    }

    @Patch('/:id/status')
    @Roles(Role.ADMIN)
    updateReportStatus(@Param('id') id: string, @Body() report: ReportStatusDto) {
        return this.reportsService.update(id, report);
    }

    @Delete('/:id')
    @Roles(Role.ADMIN)
    deleteReport(@Param('id') id: string) {
        return this.reportsService.delete(id);
    }

}