import { ReportsService } from "./reports.service";
export declare class ReportsController {
    reportsService: ReportsService;
    constructor(reportsService: ReportsService);
    getReports(): Promise<(import("mongoose").Document<unknown, {}, import("./reports.schema").Report> & import("./reports.schema").Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getReport(id: string): Promise<import("mongoose").Document<unknown, {}, import("./reports.schema").Report> & import("./reports.schema").Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    createReport(body: any): Promise<import("mongoose").Document<unknown, {}, import("./reports.schema").Report> & import("./reports.schema").Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
