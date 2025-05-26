import { Model } from "mongoose";
import { Report } from "./reports.schema";
import { ReportDto } from "./dtos/report.dto";
import { User } from "../users/users.schema";
export declare class ReportsService {
    private reports;
    private user;
    constructor(reports: Model<Report>, user: Model<User>);
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
    create(reportPayload: ReportDto): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
