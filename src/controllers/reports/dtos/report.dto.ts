import { Expose, Transform } from "class-transformer";

export class ReportDto {
    name: string;

    description: string;

    userId: string;
}