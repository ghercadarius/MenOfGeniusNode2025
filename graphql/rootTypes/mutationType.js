import graphql from 'graphql';
import createUserMutation from '../mutations/user/createUserMutation.js';
import updateUserMutation from '../mutations/user/updateUserMutation.js';
import deleteUserMutation from '../mutations/user/deleteUserMutation.js';
import loginMutation from '../mutations/login/loginMutation.js';
import uploadProductMutation from '../mutations/product/uploadProductMutation.js';
import addProductToCartMutation from "../mutations/cart/addProductToCartMutation.js";
import createChatMutation from "../mutations/chat/createChatMutation.js";
import removeProductFromCartMutation from "../mutations/cart/removeProductFromCartMutation.js";
import removeAllProductsFromCartMutation from "../mutations/cart/removeAllProductsFromCartMutation.js";

// Define the Query type
const mutationType = new graphql.GraphQLObjectType({
    name: "Mutation",
    fields: {
        //User Mutations
        createUser: createUserMutation,
        updateUser: updateUserMutation,
        deleteUser: deleteUserMutation,

        //Auth Mutations
        login: loginMutation,

        //Product Mutations
        uploadProduct: uploadProductMutation,

        //Cart Mutations
        addProductToCart: addProductToCartMutation,
        removeProductFromCart: removeProductFromCartMutation,
        removeAllProductsFromCart: removeAllProductsFromCartMutation,

        //Chat Mutations
        createChat: createChatMutation,
    }
});


export default mutationType;