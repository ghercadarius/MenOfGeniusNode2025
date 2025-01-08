import userInputType from '../../types/user/userInputType.js';
import userType from '../../types/user/userType.js';
import {createUser} from "../../../core/services/userService.js";

const createUserMutationResolver = async (_, {user}, context) => {
    return await createUser(user);

}

const createUserMutation = {
    type: userType,
    args: {
        user: {type: userInputType},
    },
    resolve: createUserMutationResolver,
};

export default createUserMutation;