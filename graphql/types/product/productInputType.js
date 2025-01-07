import {GraphQLFloat, GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";
import categoryType from "./categoryType.js";

const productInputType = new GraphQLInputObjectType({
    name: 'ProductInput',
    fields: {
        category: {type: categoryType},
        name: {type: new GraphQLNonNull(GraphQLString)},
        price: {type: new GraphQLNonNull(GraphQLFloat)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        urlPhoto: {type: new GraphQLNonNull(GraphQLString)},

    }
});

export default productInputType;