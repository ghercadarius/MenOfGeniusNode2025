import {GraphQLObjectType, GraphQLString} from 'graphql';

const roleType = new GraphQLObjectType({
    name: 'Role',
    fields: {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
    },
});

export default roleType;
//TODO create user with user role findById return not found