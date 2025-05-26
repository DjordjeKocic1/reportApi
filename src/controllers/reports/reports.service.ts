import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Report } from "./reports.schema";
import { ReportDto } from "./dtos/report.dto";

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report.name) private reports: Model<Report>) {}
  async findAll(userId: string) {
    const reports = await this.reports.find({ userId });
    return reports;
  }

  async findOne(id: string) {
    const report = await this.reports.findById({ _id: id });
    return report;
  }

  async create(reportPayload: ReportDto, userId: string) {
    reportPayload.userId = userId;
    const report = new this.reports(reportPayload);
    return await report.save();
  }
}
