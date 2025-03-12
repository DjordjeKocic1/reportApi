import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/auth";
import { ReportsModule } from "./controllers/reports/reports.module";
import { UsersModule } from "./controllers/users/users.module";
import { AuthModule } from "./controllers/auth/auth.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://djordjereports:djole1989@reports.p6ovw.mongodb.net/?retryWrites=true&w=majority&appName=Reports"
    ),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" },
    }),
    ReportsModule,
    UsersModule,
    AuthModule
  ]
})
export class AppModule {}
