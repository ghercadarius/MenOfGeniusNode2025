import {GraphQLObjectType} from 'graphql';
import userQuery from '../queries/user/userQuery.js';
import usersQuery from '../queries/user/usersQuery.js';
import productsQuery from "../queries/product/productsQuery.js";
import productQuery from "../queries/product/productQuery.js";

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,

        product: productQuery,
        products: productsQuery,

    },
});


export default queryType;