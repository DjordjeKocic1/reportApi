export class UserService {
    async findAll() {
        return "All users";
    }

    async findOne(id: string) {
        return `User ${id}`
    }

    async create(payload: any) {
        return payload;
    }
}