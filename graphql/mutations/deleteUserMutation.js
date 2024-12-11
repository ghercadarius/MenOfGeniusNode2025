import {GraphQLBoolean, GraphQLInt} from 'graphql';
import {deleteEntity, findEntity} from '../../fakeDb.js';

const deleteUserResolver = (_, args) => {
    const user = findEntity('users', args.id);

    if (!user) {
        return null;
    }

    deleteEntity('users', args.id);
    return true;
}

const deleteUserMutation = {
    type: GraphQLBoolean,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: deleteUserResolver,
};

export default deleteUserMutation;