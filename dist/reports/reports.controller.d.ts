import { ReportsService } from "./reports.service";
import { Report } from "./reports.schema";
export declare class ReportsController {
    reportsService: ReportsService;
    constructor(reportsService: ReportsService);
    getReports(): Promise<(import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getReport(id: string): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    createReport(report: Report): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
