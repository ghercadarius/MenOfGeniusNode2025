import {securedResolver} from "../../../core/utils/securedResolver.js";
import {getAllUserChats} from "../../../core/services/chatService.js";
import {GraphQLList} from "graphql";
import chatType from "../../types/chat/chatType.js";

const chatsUserResolver = async (_, args, context) => {
    return await getAllUserChats(context.userId);
}
const chatsUserQuery = {
    type: new GraphQLList(chatType),
    resolve: securedResolver()(chatsUserResolver),
};

export default chatsUserQuery;