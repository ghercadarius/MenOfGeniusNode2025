import { GraphQLBoolean } from 'graphql';
import userInputType from '../types/userInputType.js';
import {createEntity} from '../../fakeDb.js';

const createUserMutationResolver = (_, { user }, context) => {
    const isAuthorized = !!context.user_id
   
    if(!isAuthorized) {
        return false;
    }
    
    createEntity('users', {
        name: user.name,
        password: user.password
    });
    return true;
    
}

const createUserMutation = {
    type: GraphQLBoolean,
    args: {
        user: {type: userInputType},
    },
    resolve: createUserMutationResolver,
};

export default createUserMutation;