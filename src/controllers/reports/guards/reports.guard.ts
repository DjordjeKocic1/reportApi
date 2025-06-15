import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { ReportsService } from "../reports.service";

@Injectable()
export class ReportsGuard implements CanActivate {
  constructor(private reportService: ReportsService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const reportId: string = request.params.reportId;
    try {
        await this.reportService.findOne(reportId);
    } catch (error) {
        throw new UnprocessableEntityException("Report doesnt exists");
    }
    return true;
  }
}
