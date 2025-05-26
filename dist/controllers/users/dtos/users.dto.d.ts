import mongoose from "mongoose";
export declare class UserDto {
    _id: mongoose.Schema.Types.ObjectId;
    username: string;
    age: number;
    mobile: number;
    access_token: string;
    password: string;
}
