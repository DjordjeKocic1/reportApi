import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  age: string;

  @Prop()
  city: string;
}

export const UsersSchema = SchemaFactory.createForClass(User);