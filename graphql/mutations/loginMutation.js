import {JWT_SECRET} from '../../constants.js';
import loginInputType from '../types/loginInputType.js';
import loginResultType from '../types/loginResultType.js';
import jwt from 'jsonwebtoken';
import db from '../../models/index.js';
import bcrypt from 'bcrypt';
import {GraphQLError} from "graphql";

const loginMutationResolver = async (_, args) => {
    const user = await db.User.findOne({
        where: {
            username: args.credentials.username,
        }
    });

    if (!user) {
        throw new GraphQLError("Bad credentials", {
            extensions: {
                code: 'BAD_USER_INPUT',
            },
        });
    }

    const providedPassword = args.credentials.password;
    const userPassword = user.password;

    const passwordIsValid = await bcrypt.compare(providedPassword, userPassword);

    if (!passwordIsValid) {
        console.log("Password is invalid");
        throw new GraphQLError("Bad credentials", {
            extensions: {
                code: 'BAD_USER_INPUT',
            },
        });
    }

    const token = jwt.sign({user_id: user.id}, JWT_SECRET);

    return {
        token,
    };
}

const loginMutation = {
    type: loginResultType,
    args: {
        credentials: {type: loginInputType},
    },
    resolve: loginMutationResolver,
};

export default loginMutation;