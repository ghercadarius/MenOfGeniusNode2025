import {GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';
import userType from "../user/userType.js";

const productType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        user: {
            type: userType,
            resolve: async (product) => await product.getUser()
        }
    }
});

export default productType;
