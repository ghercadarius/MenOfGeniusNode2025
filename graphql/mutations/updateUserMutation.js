import graphql from 'graphql';
import userInputType from '../types/userInputType.js';
import {findEntity, updateEntity} from '../../fakeDb.js';
import userType from '../types/userType.js';

const updateUserMutationResolver = (_, args) => {
    updateEntity('users', args.id, args.user);
    return findEntity('users', args.id);
}

const updateUserMutation = {
    type: userType,
    args: {
        id: {type: graphql.GraphQLInt},
        user: {type: userInputType},
    },
    resolve: updateUserMutationResolver,
};

export default updateUserMutation;