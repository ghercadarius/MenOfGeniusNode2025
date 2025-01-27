import chatRepository from "../repositories/chatRepository.js";
import {handleError} from "../utils/handleError.js";
import chatType from "../../graphql/types/chat/chatType.js";
import productRepository from "../repositories/productRepository.js";

export const getChatById = async (id, user_id) => {
    const chat = await chatRepository.getById(id);
    if (!chat)
        handleError("Chat not found", 'BAD_REQUEST');
    if (chat.userId !== user_id)
        handleError("Unauthorized", 'UNAUTHORIZED');
    return chat;
}

export const getAllUserChats = async (user_id) => {
    const chats = await chatRepository.getAll();
    const result = [];
    for (const chat of chats) {
        const product = await productRepository.getById(chat.productId);
        if (product.userId === user_id || chat.userId === user_id)
            result.push(chat);
    }
    return result;
}

export const getAllChats = async ()=> {
    return await chatRepository.getAll();
};

export const createChat = async (chat, user_id) => {
    chat.userId = user_id;
    return await chatRepository.save(chat);
}