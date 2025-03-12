import { Expose } from "class-transformer";

export class UserDto {
    @Expose()
    _id: string;
    
    @Expose()
    username: string;

    @Expose()
    age: number;

    @Expose()
    access_token: string;
    
    password: string;
}