import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { ReportsService } from "../reports.service";

@Injectable()
export class ReportGuard implements CanActivate {
  constructor(private reportService: ReportsService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const id = request.params.id;
    try {
        return !!await this.reportService.findOne(id);
    } catch (error) {
        throw new UnprocessableEntityException("Id not found");
    }
  }
}
