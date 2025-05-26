import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Report } from "./reports.schema";
import { ReportDto } from "./dtos/report.dto";
import { User } from "../users/users.schema";

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reports: Model<Report>,
    @InjectModel(User.name) private user: Model<User>
  ) {}
  async findAll(userId: string) {
    const reports = await this.reports.find({ userId });
    return reports;
  }

  async findOne(id: string) {
    const report = await this.reports.findById({ _id: id });
    return report;
  }

  async create(reportPayload: ReportDto) {
    const report = new this.reports(reportPayload);
    const user = await this.user.findById(reportPayload.userId);
    if (!user) throw new UnauthorizedException("User not found");
    user.reports.push(report);
    await user.save();

    return await report.save();
  }
}
