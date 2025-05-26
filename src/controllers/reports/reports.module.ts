import { Module } from "@nestjs/common";
import { ReportsController } from "./reports.controller";
import { ReportsService } from "./reports.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Report, ReportsSchema } from "./reports.schema";
import { UserService } from "../users/users.service";
import { CurrentUserInterceptor } from "../users/interceptors/current-user.interceptor";
import { User, UsersSchema } from "../users/users.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportsSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService, UserService],
})
export class ReportsModule {}
