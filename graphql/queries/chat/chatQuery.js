import chatType from "../../types/chat/chatType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {getChatById} from "../../../core/services/chatService.js";
import {GraphQLInt} from "graphql";

const chatQueryResolver = async (_, args, context) => {
    return await getChatById(args.id, context.user_id);
}
const chatQuery = {
    type: chatType,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: securedResolver()(chatQueryResolver),
};

export default chatQuery;