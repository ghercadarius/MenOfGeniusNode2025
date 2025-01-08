import {securedResolver} from "../../../core/utils/securedResolver.js";
import messageInputType from "../../types/message/messageInputType.js";
import messageType from "../../types/message/messageType.js";
import {createMessage} from "../../../core/services/messageService.js";

const createMessageMutationResolver = async (_, args, context) => {
    return await createMessage(args.message, context.user_id);
}

const createMessageMutation = {
    type: messageType,
    args: {
        message: {type: messageInputType},
    },
    resolve: securedResolver()(createMessageMutationResolver),
}

export default createMessageMutation;