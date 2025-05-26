import { Model } from "mongoose";
import { Report } from "./reports.schema";
import { ReportDto } from "./dtos/report.dto";
export declare class ReportsService {
    private reports;
    constructor(reports: Model<Report>);
    findAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    create(reportPayload: ReportDto, userId: string): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
