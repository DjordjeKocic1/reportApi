import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './reports.schema';

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report.name) private reports: Model<Report>) {}
  async findAll() {
    const reports = await this.reports.find();
    return reports;
  }

  async findOne(id: string) {
    const report = await this.reports.findById({ _id: id });
    return report;
  }

  async create(payload: any) {
    const report = new this.reports(payload);
    await report.save();
    return report;
  }
}
