import {hasRoles, isAuthenticated} from './authUtils.js';
import {handleError} from './errorHandler.js';

export const securedResolver = (roles = ['user']) => {
    return (resolver) => {
        return async (parent, args, context, info) => {
            if (!isAuthenticated(context)) {
                handleError("Not authenticated", 'UNAUTHENTICATED');
            }

            const hasRequiredRole = await hasRoles(context.user_id, roles);

            if (!hasRequiredRole) {
                handleError("Not authorized", 'FORBIDDEN');
            }

            return resolver(parent, args, context, info);
        };
    };
};
