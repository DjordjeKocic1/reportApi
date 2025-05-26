import { InjectModel } from "@nestjs/mongoose";
import { User } from "./users.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { UserDto } from "./dtos/users.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private users: Model<User>) {}

    async findOne(username: string) {
        const user = await this.users.findOne({ username });
        return user;
    }

    async create(username: string, password: string) {        
        const userCreated = new this.users({ username, password });
        await userCreated.save();
        return userCreated;
    }

    async update(id:string, user: UserDto) {
        const userUpdated = await this.users.findOneAndUpdate({ _id: id }, user, { new: true });
        return userUpdated;
    }
}