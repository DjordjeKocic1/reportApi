import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportsSchema } from './reports.schema';

@Module({
    imports:[MongooseModule.forFeature([{ name: Report.name, schema: ReportsSchema }])],
    controllers: [ReportsController],
    providers: [ReportsService],
})

export class ReportsModule {}