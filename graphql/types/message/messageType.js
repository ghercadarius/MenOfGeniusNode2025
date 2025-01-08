import userType from "../user/userType.js";
import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
import productType from "../product/productType.js";

const MessageType = new GraphQLObjectType({
    name: 'MessageType',
    fields: {
        id: {type: GraphQLInt},
        user: {
            type: userType,
            resolve: async (message) => await message.getUser()
        },
        message: {type: GraphQLString},
    }
});

export default MessageType;