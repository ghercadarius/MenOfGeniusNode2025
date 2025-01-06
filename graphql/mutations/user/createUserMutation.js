import userInputType from '../../types/user/userInputType.js';
import db from '../../../models/index.js';
import userType from '../../types/user/userType.js';
import bcrypt from 'bcrypt';
import {RoleEnum} from "../../../models/enums/roleEnum.js";

const createUserMutationResolver = async (_, {user}, context) => {
    const password = await bcrypt.hash(user.password, 5);

    const newUser = await db.User.create({
        username: user.username,
        password: password,
    });

    const userRole = await db.Role.findOne({
        where: {
            name: RoleEnum.USER,
        }
    });

    await newUser.addRole(userRole);

    return newUser;

}

const createUserMutation = {
    type: userType,
    args: {
        user: {type: userInputType},
    },
    resolve: createUserMutationResolver,
};

export default createUserMutation;