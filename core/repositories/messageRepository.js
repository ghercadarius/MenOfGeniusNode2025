import db from '../../models/index.js';

class MessageRepository {
    static async getAll() {
        return await db.Message.findAll();
    }

    static async getById(id) {
        return await db.Message.findOne({
            where: {id}
        });
    }

    static save(message) {
        return db.Message.create(message);
    }
}

export default MessageRepository;