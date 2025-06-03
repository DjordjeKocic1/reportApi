import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ReportStatus } from "src/types/enums";

@Schema()
export class Report {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ enum: ReportStatus, default: ReportStatus.PENDING })
  status: ReportStatus;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: mongoose.Schema.Types.ObjectId;
}

export const ReportsSchema = SchemaFactory.createForClass(Report);