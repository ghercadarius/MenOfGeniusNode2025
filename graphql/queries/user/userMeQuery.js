import userType from "../../types/user/userType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {getMe} from "../../../core/services/userService.js";

const userMeResolver = async (_, args, context) => {
    return await getMe(context.userId);
}

const userMeQuery = {
    type: userType,
    resolve: securedResolver()(userMeResolver),
}

export default userMeQuery;