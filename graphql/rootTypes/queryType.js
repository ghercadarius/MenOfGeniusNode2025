import {GraphQLObjectType} from 'graphql';
import userQuery from '../queries/user/userQuery.js';
import usersQuery from '../queries/user/usersQuery.js';
import productsQuery from "../queries/product/productsQuery.js";
import productQuery from "../queries/product/productQuery.js";
import userMeQuery from "../queries/user/userMeQuery.js";
import chatQuery from "../queries/chat/chatQuery.js";
import chatsUserQuery from "../queries/chat/chatsUserQuery.js";
import chatsQuery from "../queries/chat/chatsQuery.js";
import userCartQuery from "../queries/cart/userCartQuery.js";
import messagesChatQuery from "../queries/message/messagesChatQuery.js";
import offersReceivedQuery from "../queries/order/offersReceivedQuery.js";
import myProductsQuery from "../queries/product/myProductsQuery.js";
import myOrdersQuery from "../queries/order/myOrdersQuery.js";

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        //User Queries
        user: userQuery,
        users: usersQuery,
        me: userMeQuery,

        //Product Queries
        product: productQuery,
        products: productsQuery,
        myProducts: myProductsQuery,

        //Cart Queries
        cart: userCartQuery,

        //Chat Queries
        chat: chatQuery,
        chats: chatsQuery,
        chatsUser: chatsUserQuery,
        messagesChat: messagesChatQuery,

        //Order Queries
        offersReceived: offersReceivedQuery,
        myOrders: myOrdersQuery,
    },
});


export default queryType;