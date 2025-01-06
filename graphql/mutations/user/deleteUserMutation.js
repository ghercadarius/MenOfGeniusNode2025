import {GraphQLBoolean, GraphQLInt} from 'graphql';
import db from '../../../models/index.js';
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {handleError} from "../../../core/utils/handleError.js";

const deleteUserResolver = async (_, args) => {
    const user = await db.User.findOne({
        where: {
            id: args.id,
        }
    })

    if (!user) {
        handleError("User not found", 'BAD_USER_INPUT');
    }

    await user.destroy();
    return true;
}

const deleteUserMutation = {
    type: GraphQLBoolean,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: securedResolver(['admin'])(deleteUserResolver),
};

export default deleteUserMutation;