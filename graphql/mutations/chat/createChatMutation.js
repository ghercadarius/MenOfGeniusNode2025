import chatType from "../../types/chat/chatType.js";
import {createChat} from "../../../core/services/chatService.js";
import chatInputType from "../../types/chat/chatInputType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";

const createChatMutationResolver = async (_, args, context) => {
    return await createChat(args.chat, context.userId);
}

const createChatMutation = {
    type: chatType,
    args: {
        chat: {type: chatInputType},
    },
    resolve: securedResolver()(createChatMutationResolver),
}

export default createChatMutation;