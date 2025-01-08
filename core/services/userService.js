import bcrypt from "bcrypt";
import userRepository from "../repositories/userRepository.js";
import {RoleEnum} from "../../models/enums/roleEnum.js";
import {createCart} from "./cartService.js";

export const createUser = async (user) => {
    const password = await bcrypt.hash(user.password, 5);

    const newUser = await userRepository.createUser({
        username: user.username,
        password: password,
    });

    const userRole = await userRepository.getRoleByName(RoleEnum.USER);
    newUser.addRole(userRole);

    await createCart(newUser.id);
    return newUser;
}

export const deleteUser = async (id) => {
    const user = await userRepository.getUserById(id);
    await user.destroy();
    return user;
}

export const updateUser = async (id, user) => {
    const userToUpdate = await userRepository.getUserById(id);
    const {password, ...rest} = user;
    if (password) {
        rest.password = await bcrypt.hash(password, 5);
    }
    return await userToUpdate.update(rest);
}

export const getMe = async (id) => {
    return await userRepository.getUserById(id);
}