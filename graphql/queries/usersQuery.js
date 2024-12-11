import { GraphQLList } from 'graphql';
import userType from '../types/userType.js';
import { listEntities } from '../../fakeDb.js';

const usersQueryResolver = () => {
    return listEntities('users');
}

const usersQuery = {
    type: new GraphQLList(userType),
    resolve: usersQueryResolver,
};

export default usersQuery;