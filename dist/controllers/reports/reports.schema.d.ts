import mongoose from "mongoose";
export declare class Report {
    name: string;
    description: string;
    userId: mongoose.Schema.Types.ObjectId;
}
export declare const ReportsSchema: mongoose.Schema<Report, mongoose.Model<Report, any, any, any, mongoose.Document<unknown, any, Report> & Report & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Report, mongoose.Document<unknown, {}, mongoose.FlatRecord<Report>> & mongoose.FlatRecord<Report> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
