import chatType from "../../types/chat/chatType.js";
import {GraphQLInt, GraphQLList} from "graphql";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {getAllByChatId} from "../../../core/services/messageService.js";
import messageType from "../../types/message/messageType.js";

const messageQueryResolver = async (_, args, context) => {
    return await getAllByChatId(args.chatId, context.user_id);
}

const messagesChatQuery = {
    type: new GraphQLList(messageType),
    args: {
        chatId: {type: GraphQLInt},
    },
    resolve: securedResolver()(messageQueryResolver),
};

export default messagesChatQuery;