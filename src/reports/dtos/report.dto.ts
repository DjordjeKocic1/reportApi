import { Expose } from "class-transformer";

export class ReportDto {
    @Expose()
    name: string;
    
}