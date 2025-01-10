import db from '../../models/index.js';

class ChatRepository {
    static async getAll() {
        return await db.Chat.findAll();
    }

    static async getById(id) {
        return await db.Chat.findOne({
            where: {id}
        });
    }

    static save(chat) {
        return db.Chat.create(chat);
    }
}

export default ChatRepository;