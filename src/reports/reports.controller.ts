import { Body, Controller, Get, Param, Post, UseInterceptors } from "@nestjs/common";
import { ReportsService } from "./reports.service";
import { SerializeInterceptor } from "src/interceptors/serialize.interceptor";
import { Report } from "./reports.schema";

@Controller('reports')
export class ReportsController {
    constructor(public reportsService: ReportsService) {}
    @Get()
    getReports() {
        return this.reportsService.findAll();
    }

    @UseInterceptors(SerializeInterceptor)
    @Get('/:id')
    getReport(@Param('id') id: string) {
        return this.reportsService.findOne(id);
    }

    @UseInterceptors(SerializeInterceptor)
    @Post()
    createReport(@Body() report: Report) {
        return this.reportsService.create(report);
    }

}