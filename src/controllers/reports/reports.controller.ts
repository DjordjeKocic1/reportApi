import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { Report } from "./reports.schema";
import { ReportDto } from "./dtos/report.dto";

@Controller('reports')
@Serialize(ReportDto)
export class ReportsController {
    constructor(public reportsService: ReportsService) {}
    @Get()
    getReports() {
        return this.reportsService.findAll();
    }

    @Get('/:id')
    getReport(@Param('id') id: string) {
        return this.reportsService.findOne(id);
    }

    
    @Post()
    createReport(@Body() report: Report) {
        return this.reportsService.create(report);
    }

}