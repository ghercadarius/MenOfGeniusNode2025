import db from "../../models/index.js";
import {handleError} from "../utils/handleError.js";

class UserRepository {
    static async getUserById(id) {
        const user = await db.User.findByPk(id);
        if (!user)
            handleError("User not found", "NOT_FOUND");
        return user;
    }

    static async getAllUsers() {
        return await db.User.findAll();
    }

    static async createUser(user) {
        return db.User.create(user);
    }

    static async getRoleByName(RoleEnum) {
        return db.Role.findOne({where: {name: RoleEnum}});
    }
}

export default UserRepository;