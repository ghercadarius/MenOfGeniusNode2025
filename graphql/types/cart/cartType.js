import userType from "../user/userType.js";
import {GraphQLInt, GraphQLList, GraphQLObjectType} from "graphql";
import productType from "../product/productType.js";

const cartType = new GraphQLObjectType({
    name: 'Cart',
    fields: {
        id: {type: GraphQLInt},
        user: {
            type: userType,
            resolve: async (cart) => await cart.getUser()
        },
        products: {
            type: new GraphQLList(productType),
            resolve: async (cart) => await cart.getProducts()
        },

    }
});

export default cartType;