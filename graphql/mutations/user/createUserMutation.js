import userInputType from '../../types/user/userInputType.js';
import db from '../../../models/index.js';
import userType from '../../types/user/userType.js';
import bcrypt from 'bcrypt';

const createUserMutationResolver = async (_, {user}, context) => {
    const password = await bcrypt.hash(user.password, 5);

    return await db.User.create({
        username: user.username,
        password: password,
    });

}

const createUserMutation = {
    type: userType,
    args: {
        user: {type: userInputType},
    },
    resolve: createUserMutationResolver,
};

export default createUserMutation;