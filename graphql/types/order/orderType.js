import productType from "../product/productType.js";
import userType from "../user/userType.js";
import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

const orderType = new GraphQLObjectType({
    name: 'Order',
    fields: {
        id: {type: GraphQLInt},
        user: {
            type: userType,
            resolve: async (order) => await order.getUser()
        },
        product: {
            type: productType,
            resolve: async (order) => await order.getProduct()
        },
        status: {type: GraphQLString},
    },
});

export default orderType;