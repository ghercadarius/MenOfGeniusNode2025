import {GraphQLInt} from 'graphql';
import userType from '../../types/user/userType.js';
import userRepository from "../../../core/repositories/userRepository.js";

const userQueryResolver = async (_, {id}) => {
    return await userRepository.getUserById(id);
}

const userQuery = {
    type: userType,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: userQueryResolver,
};

export default userQuery;