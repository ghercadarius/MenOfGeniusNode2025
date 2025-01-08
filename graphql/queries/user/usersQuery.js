import {GraphQLList} from 'graphql';
import userType from '../../types/user/userType.js';
import userRepository from "../../../core/repositories/userRepository.js";

const usersQueryResolver = async () => {
    return await userRepository.getAllUsers();
}

const usersQuery = {
    type: new GraphQLList(userType),
    resolve: usersQueryResolver,
};

export default usersQuery;