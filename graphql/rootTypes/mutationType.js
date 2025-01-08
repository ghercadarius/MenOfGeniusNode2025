import graphql from 'graphql';
import createUserMutation from '../mutations/user/createUserMutation.js';
import updateUserMutation from '../mutations/user/updateUserMutation.js';
import deleteUserMutation from '../mutations/user/deleteUserMutation.js';
import loginMutation from '../mutations/login/loginMutation.js';
import uploadProductMutation from '../mutations/product/uploadProductMutation.js';
import addProductToCartMutation from "../mutations/cart/addProductToCartMutation.js";

// Define the Query type
const queryType = new graphql.GraphQLObjectType({
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
        //TODO - add deleteProductFromCart mutationd
    }
});


export default queryType;