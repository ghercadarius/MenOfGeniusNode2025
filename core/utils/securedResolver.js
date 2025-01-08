import {hasRoles, isAuthenticated} from './authUtils.js';
import {handleError} from './handleError.js';
import {RoleEnum} from "../../models/enums/roleEnum.js";

export const securedResolver = (roles = [RoleEnum.USER]) => {
    return (resolver) => {
        return async (parent, args, context, info) => {
            if (!isAuthenticated(context)) {
                handleError("Not authenticated", 'UNAUTHENTICATED');
            }

            const hasRequiredRole = await hasRoles(context.userId, roles);

            if (!hasRequiredRole) {
                handleError("Not authorized", 'FORBIDDEN');
            }

            return resolver(parent, args, context, info);
        };
    };
};
