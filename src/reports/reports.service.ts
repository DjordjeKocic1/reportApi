export class ReportsService {
    async findAll() {
        return "All reports";
    }

    async findOne(id: string) {
        return `Report ${id}`
    }

    async create(payload: any) {
        return payload;
    }
}