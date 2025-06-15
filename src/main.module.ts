import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/auth";
import { ReportsModule } from "./controllers/reports/reports.module";
import { UsersModule } from "./controllers/users/users.module";
import { AuthModule } from "./controllers/auth/auth.module";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReportCommentsModule } from "./controllers/comments/report-comments.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      })
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "10h" },
    }),
    ReportsModule,
    UsersModule,
    AuthModule,
    ReportCommentsModule
  ]
})
export class AppModule {}
