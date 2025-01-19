import { Model } from 'mongoose';
import { Report } from './reports.schema';
export declare class ReportsService {
    private reports;
    constructor(reports: Model<Report>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    create(payload: any): Promise<import("mongoose").Document<unknown, {}, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
