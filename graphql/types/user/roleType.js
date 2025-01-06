import {GraphQLObjectType, GraphQLString} from 'graphql';

const roleType = new GraphQLObjectType({
    name: 'Role',
    fields: {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
    },
});

export default roleType;
