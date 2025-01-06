import {GraphQLBoolean, GraphQLError, GraphQLInt} from 'graphql';
import db from '../../models/index.js';

const deleteUserResolver = async (_, args, context) => {
    const isAuthenticated = !!context.user_id

    if (!isAuthenticated) {
        console.log("Not authenticated");
        throw new GraphQLError("Not authenticated", {
            extensions: {
                code: 'UNAUTHENTICATED',
            },
        });
    }
    //TODO - create a jwt filter to verify the roles
    const userRequester = await db.User.findOne({
        where: {
            id: context.user_id,
        }
    });
    const roles = await userRequester.getRoles();
    const isAdmin = roles.some((role) => role.name === 'admin');
    if (!isAdmin) {
        throw new GraphQLError("Not authorized", {
            extensions: {
                code: 'FORBIDDEN',
            },
        });
    }

    const user = await db.User.findOne({
        where: {
            id: args.id,
        }
    })

    if (!user) {
        throw new GraphQLError("User not found", {
            extensions: {
                code: 'BAD_USER_INPUT',
            },
        });
    }

    await user.destroy();
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