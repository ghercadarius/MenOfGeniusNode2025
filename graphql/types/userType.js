import {GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql'
import roleType from "./roleType.js";

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLInt},
        username: {type: GraphQLString},
        roles: {
            type: new GraphQLList(roleType),
            resolve: async (user) => await user.getRoles()
        }
    }
});

export default userType;