import {GraphQLObjectType} from 'graphql';
import userQuery from '../queries/user/userQuery.js';
import usersQuery from '../queries/user/usersQuery.js';
import productsQuery from "../queries/product/productsQuery.js";
import productQuery from "../queries/product/productQuery.js";
import chatQuery from "../queries/chat/chatQuery.js";
import chatsUserQuery from "../queries/chat/chatsUserQuery.js";
import chatsQuery from "../queries/chat/chatsQuery.js";

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,

        product: productQuery,
        products: productsQuery,

        chat: chatQuery,
        chats: chatsQuery,
        chatsUser: chatsUserQuery,
    },
});


export default queryType;