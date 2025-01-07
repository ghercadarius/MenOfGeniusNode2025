import {GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';
import userType from "../user/userType.js";
import categoryType from "./categoryType.js";

const productType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        id: {type: GraphQLInt},
        category: {type: categoryType},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        urlPhoto: {type: GraphQLString},
        user: {
            type: userType,
            resolve: async (product) => await product.getUser()
        }
    }
});

export default productType;
