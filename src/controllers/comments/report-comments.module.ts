import { Module } from "@nestjs/common";
import { UserService } from "../users/users.service";
import { ReportCommentsService } from "./report-comments.service";
import { ReportCommentsController } from "./report-comments.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ReportComment, ReportCommentsSchema } from "./report-comments.schema";
import { User, UsersSchema } from "../users/users.schema";
import { ReportsService } from "../reports/reports.service";
import { Report, ReportsSchema } from "../reports/reports.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportComment.name, schema: ReportCommentsSchema },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
    MongooseModule.forFeature([{ name: Report.name, schema: ReportsSchema }]),
  ],
  controllers: [ReportCommentsController],
  providers: [UserService, ReportsService, ReportCommentsService],
})
export class ReportCommentsModule {}
