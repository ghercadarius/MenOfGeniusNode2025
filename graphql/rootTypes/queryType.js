import {GraphQLObjectType} from 'graphql';
import userQuery from '../queries/user/userQuery.js';
import usersQuery from '../queries/user/usersQuery.js';
import productsQuery from "../queries/product/productsQuery.js";
import productQuery from "../queries/product/productQuery.js";
import userMeQuery from "../queries/user/userMeQuery.js";

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

        //TODO - add cart queries getCartProducts

    },
});


export default queryType;