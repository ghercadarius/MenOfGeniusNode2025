import graphql from 'graphql';
import userInputType from '../../types/user/userInputType.js';
import userType from '../../types/user/userType.js';
import db from '../../../models/index.js';
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {RoleEnum} from "../../../models/enums/roleEnum.js";

const updateUserMutationResolver = async (_, args) => {
    const id = args.id;

    const user = await db.User.findOne({
        where: {
            id,
        }
    });

    if (!user) {
        return false;
    }

    return await user.update({
        ...args.user,
    });
}

const updateUserMutation = {
    type: userType,
    args: {
        id: {type: graphql.GraphQLInt},
        user: {type: userInputType},
    },
    resolve: securedResolver([RoleEnum.ADMIN])(updateUserMutationResolver),
};

export default updateUserMutation;