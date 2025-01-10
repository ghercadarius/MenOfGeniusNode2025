import Chat from "../../models/chat.js";
import messageRepository from "../repositories/messageRepository.js";
import {where} from "sequelize";
import chatRepository from "../repositories/chatRepository.js";
import productRepository from "../repositories/productRepository.js";
import {hasRoles} from "../utils/authUtils.js";

export const getAllByChatId = async(chat_id, user_id) => {
    const verifyUserChat = await chatRepository.getById(chat_id);
    const productChat = await productRepository.getById(verifyUserChat.productId);
    if (verifyUserChat.userId !== user_id && productChat.userId !== user_id && !hasRoles(user_id, ['ADMIN'])) {
        handleError('User is not allowed to see this chat');
    }
    const messages = await messageRepository.getAll();
    return messages.filter(message => message.chatId === chat_id);
}

export const createMessage = async(message, user_id) => {
    const verifyUserChat = await chatRepository.getById(message.chatId);
    const productChat = await productRepository.getById(verifyUserChat.productId);
    if (verifyUserChat.userId !== user_id && productChat.userId !== user_id) {
        handleError('User is not allowed to write in this chat');
    }
    message.userId = user_id;
    return await messageRepository.save(message);
}