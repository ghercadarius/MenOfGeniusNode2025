import {JWT_SECRET} from '../../constants.js';
import loginInputType from '../types/loginInputType.js';
import loginResultType from '../types/loginResultType.js';
import jwt from 'jsonwebtoken';
import db from '../../models/index.js';
import bcrypt from 'bcrypt';
import {GraphQLError} from "graphql";

const validateUserCredentials = async (username, password) => {
    const user = await db.User.findOne({where: {username}});
    if (!user) {
        throw new GraphQLError("Bad credentials", {
            extensions: {code: 'BAD_USER_INPUT'},
        });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
        throw new GraphQLError("Bad credentials", {
            extensions: {code: 'BAD_USER_INPUT'},
        });
    }

    return user;
};

const generateAuthToken = (userId) => {
    return jwt.sign({user_id: userId}, JWT_SECRET);
};

const loginMutationResolver = async (_, args) => {
    const {username, password} = args.credentials;

    const user = await validateUserCredentials(username, password);

    const token = generateAuthToken(user.id);

    return {
        token,
    };
};

const loginMutation = {
    type: loginResultType,
    args: {
        credentials: {type: loginInputType},
    },
    resolve: loginMutationResolver,
};

export default loginMutation;
