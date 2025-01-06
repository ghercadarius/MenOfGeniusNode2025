import {GraphQLInputObjectType, GraphQLObjectType, GraphQLString} from 'graphql'

const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    }
});

export default userInputType;