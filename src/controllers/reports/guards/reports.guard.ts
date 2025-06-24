import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { ReportsService } from "../reports.service";
import { isValidObjectId } from "mongoose";

@Injectable()
export class ReportsGuard implements CanActivate {
  constructor(private reportService: ReportsService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const reportId: string = request.params.reportId;
    if (!isValidObjectId(reportId))
      throw new BadRequestException("Invalid report ID format");

    const report = await this.reportService.findOne(reportId);
    if (!report) throw new UnprocessableEntityException("Report not found");
    
    return true;
  }
}
