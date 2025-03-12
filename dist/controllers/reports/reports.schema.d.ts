export declare class Report {
    name: string;
    description: string;
}
export declare const ReportsSchema: import("mongoose").Schema<Report, import("mongoose").Model<Report, any, any, any, import("mongoose").Document<unknown, any, Report> & Report & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Report, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Report>> & import("mongoose").FlatRecord<Report> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
