import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ReportsService } from "./reports.service";

@Controller('reports')
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
    createReport(@Body() body: any) {
        return this.reportsService.create(body);
    }

}