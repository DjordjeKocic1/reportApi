import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/types/enums";

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

  @Prop({ enum: Role, default: Role.USER })
  role: Role;
}

export const UsersSchema = SchemaFactory.createForClass(User);