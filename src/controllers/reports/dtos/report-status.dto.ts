import { IsEnum, IsNotEmpty } from "class-validator";
import { ReportStatus } from "src/types/enums";

export class ReportStatusDto {
    @IsNotEmpty({ message: 'Status is required' })
    @IsEnum(ReportStatus, { message: 'Invalid status' })
    status: ReportStatus
}