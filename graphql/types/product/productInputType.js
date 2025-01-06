import {GraphQLFloat, GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

const productInputType = new GraphQLInputObjectType({
    name: 'ProductInput',
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        price: {type: new GraphQLNonNull(GraphQLFloat)},
        description: {type: new GraphQLNonNull(GraphQLString)}
    }
});

export default productInputType;