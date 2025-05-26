import { ReportsService } from "./reports.service";
import { ReportDto } from "./dtos/report.dto";
export declare class ReportsController {
    reportsService: ReportsService;
    constructor(reportsService: ReportsService);
    getReports(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./reports.schema").Report> & import("./reports.schema").Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getReport(id: string): Promise<import("mongoose").Document<unknown, {}, import("./reports.schema").Report> & import("./reports.schema").Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    createReport(report: ReportDto): Promise<import("mongoose").Document<unknown, {}, import("./reports.schema").Report> & import("./reports.schema").Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
