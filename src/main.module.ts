import { Module } from "@nestjs/common";
import { ReportsModule } from "./reports/reports.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://djordjereports:djole1989@reports.p6ovw.mongodb.net/?retryWrites=true&w=majority&appName=Reports"
    ),
    ReportsModule,
    UsersModule
  ],
})
export class AppModule {
}
