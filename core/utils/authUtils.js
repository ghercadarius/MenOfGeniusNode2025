import db from "../../models/index.js";

export const isAuthenticated = (context) => {
    return !!context.userId;
};

export const hasRoles = async (userId, roles) => {
    const userRoles = await db.Role.findAll({
        include: [{
            model: db.User,
            where: {id: userId},
            attributes: []
        }],
        attributes: ['name'],
        raw: true
    });

    if (!userRoles.length) {
        return false;
    }

    const userRoleNames = userRoles.map(role => role.name);
    return roles.some(role => userRoleNames.includes(role));
};

