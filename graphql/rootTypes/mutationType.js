import graphql from 'graphql';
import createUserMutation from '../mutations/user/createUserMutation.js';
import updateUserMutation from '../mutations/user/updateUserMutation.js';
import deleteUserMutation from '../mutations/user/deleteUserMutation.js';
import loginMutation from '../mutations/login/loginMutation.js';
import uploadProductMutation from '../mutations/product/uploadProductMutation.js';
import createChatMutation from "../mutations/chat/createChatMutation.js";
import createMessageMutation from "../mutations/message/messageMutation.js";

// Define the Query type
const queryType = new graphql.GraphQLObjectType({
    name: "Mutation",
    fields: {
        //TODO - implemmet UserRepository and UserService
        createUser: createUserMutation,
        updateUser: updateUserMutation,
        deleteUser: deleteUserMutation,

        login: loginMutation,

        uploadProduct: uploadProductMutation,

        createChat: createChatMutation,

        createMessage: createMessageMutation,
    }
});


export default queryType;