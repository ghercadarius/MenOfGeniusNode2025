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
import createMessageMutation from "../mutations/message/messageMutation.js";
import createOrderMutation from "../mutations/order/createOrderMutation.js";
import respondToOfferMutation from "../mutations/order/respondToOfferMutation.js";
import confirmOrderMutation from "../mutations/order/confirmOrderMutation.js";

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
        createMessage: createMessageMutation,

        //Order Mutations
        createOrder: createOrderMutation,
        confirmOrder: confirmOrderMutation,

        //Offer Mutations
        respondToOffer: respondToOfferMutation,
    }
});


export default mutationType;