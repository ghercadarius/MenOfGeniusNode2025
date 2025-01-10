import {GraphQLBoolean, GraphQLInt} from 'graphql';
import db from '../../../models/index.js';
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {handleError} from "../../../core/utils/handleError.js";
import {RoleEnum} from "../../../models/enums/roleEnum.js";
import user from "../../../models/user.js";
import userType from "../../types/user/userType.js";
import {deleteUser} from "../../../core/services/userService.js";

const deleteUserResolver = async (_, args) => {
    // const user = await db.User.findOne({
    //     where: {
    //         id: args.id,
    //     }
    // })
    //
    // if (!user) {
    //     handleError("User not found", 'BAD_USER_INPUT');
    // }
    //
    // await user.destroy();
    // return true;
    return await deleteUser(args.id);
}

const deleteUserMutation = {
    type: userType,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: securedResolver([RoleEnum.ADMIN])(deleteUserResolver),
};

export default deleteUserMutation;