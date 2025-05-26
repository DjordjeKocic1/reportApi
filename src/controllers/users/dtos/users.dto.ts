import { Expose } from "class-transformer";
import mongoose from "mongoose";

export class UserDto {
    @Expose()
    _id: mongoose.Schema.Types.ObjectId;
    
    @Expose()
    username: string;

    @Expose()
    age: number;

    @Expose()
    mobile: number;

    @Expose()
    access_token: string;
    
    password: string;
}