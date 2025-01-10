import {GraphQLInt, GraphQLObjectType} from "graphql";
import userType from "../user/userType.js";
import productType from "../product/productType.js";

const ChatType = new GraphQLObjectType({
    name: 'ChatType',
    fields: {
        id: {type: GraphQLInt},
        user: {
            type: userType,
            resolve: async (chat) => await chat.getUser()
        },
        product: {
            type: productType,
            resolve: async (chat) => await chat.getProduct()
        }
    }
});

export default ChatType;