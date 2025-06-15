import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class ReportComment {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Report' })
  reportId: mongoose.Schema.Types.ObjectId;;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: mongoose.Schema.Types.ObjectId;;

  @Prop({ required: true })
  message: string;
}

export const ReportCommentsSchema = SchemaFactory.createForClass(ReportComment);