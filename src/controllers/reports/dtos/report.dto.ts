import { IsNotEmpty } from "class-validator";

export class ReportDto {
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @IsNotEmpty({ message: 'description is required' })
    description: string;

    userId?: string
}