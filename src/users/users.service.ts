import { InjectModel } from "@nestjs/mongoose";
import { User } from "./users.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private users: Model<User>) {}

    async findOne(id: string) {
        const user = await this.users.findOne({ _id: id });
        return user;
    }

    async signIn(user: User) {
        const userCreated = new this.users(user);
        await userCreated.save();
        return userCreated;
    }

    async update(id:string, user: User) {
        const userUpdated = await this.users.findOneAndUpdate({ _id: id }, user, { new: true });
        return userUpdated;
    }
}