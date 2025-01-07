import {getAllChats} from "../../../core/services/chatService.js";
import {GraphQLList} from "graphql";
import chatType from "../../types/chat/chatType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {RoleEnum} from "../../../models/enums/roleEnum.js";

const chatsResolver = async () => {
    return await getAllChats();
}
const chatsQuery = {
    type: new GraphQLList(chatType),
    resolve: securedResolver([RoleEnum.ADMIN])(chatsResolver),
};

export default chatsQuery;