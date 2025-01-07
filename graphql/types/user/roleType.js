import {GraphQLEnumType} from 'graphql';
import {RoleEnum} from "../../../models/enums/roleEnum.js";

const roleType = new GraphQLEnumType({
    name: 'Role',
    values: {
        ADMIN: {value: RoleEnum.ADMIN},
        USER: {value: RoleEnum.USER},
    }
});

export default roleType;