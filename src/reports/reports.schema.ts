import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Report {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const ReportsSchema = SchemaFactory.createForClass(Report);