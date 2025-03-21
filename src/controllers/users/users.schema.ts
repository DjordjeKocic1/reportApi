import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  age: string;

  @Prop({ type: Number })
  mobile: number;
}

export const UsersSchema = SchemaFactory.createForClass(User);