import graphql from 'graphql';
import userInputType from '../../types/user/userInputType.js';
import userType from '../../types/user/userType.js';
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {RoleEnum} from "../../../models/enums/roleEnum.js";
import {updateUser} from "../../../core/services/userService.js";

const updateUserMutationResolver = async (_, args) => {
    return await updateUser(args.id, args.user);
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