import {GraphQLInt} from 'graphql';
import userType from '../../types/user/userType.js';
import db from '../../../models/index.js';
import {handleError} from "../../../core/utils/handleError.js";

const userQueryResolver = async (_, {id}) => {
    const user = await db.User.findOne({
        where: {
            id,
        }
    });

    if (!user) {
        handleError("User not found", 'BAD_USER_INPUT');
    }
    
    return user;
}

const userQuery = {
    type: userType,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: userQueryResolver,
};

export default userQuery;