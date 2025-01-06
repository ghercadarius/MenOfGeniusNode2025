import {JWT_SECRET} from '../../../constants.js';
import loginInputType from '../../types/login/loginInputType.js';
import loginResultType from '../../types/login/loginResultType.js';
import jwt from 'jsonwebtoken';
import db from '../../../models/index.js';
import bcrypt from 'bcrypt';
import {handleError} from "../../../core/utils/handleError.js";

const validateUserCredentials = async (username, password) => {
    const user = await db.User.findOne({where: {username}});
    if (!user) {
        handleError("Bad credentials", 'BAD_USER_INPUT');
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
        handleError("Bad credentials", 'BAD_USER_INPUT');
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
