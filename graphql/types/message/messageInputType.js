import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";

const messageInputType = new GraphQLInputObjectType({
    name: 'MessageInput',
    fields: {
        message: {type: new GraphQLNonNull(GraphQLString)},
        chatId: {type: new GraphQLNonNull(GraphQLInt)}
    }
});

export default messageInputType;