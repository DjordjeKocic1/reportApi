import { ReportsService } from "./reports.service";
export declare class ReportsController {
    reportsService: ReportsService;
    constructor(reportsService: ReportsService);
    getReports(): Promise<string>;
    getReport(id: string): Promise<string>;
    createReport(body: any): Promise<any>;
}
