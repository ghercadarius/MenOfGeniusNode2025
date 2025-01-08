import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull} from "graphql";

const chatInputType = new GraphQLInputObjectType({
    name: 'ChatInput',
    fields: {
        productId: {type: new GraphQLNonNull(GraphQLInt)}
    }
});

export default chatInputType;