import db from "../../models/index.js";

export const isAuthenticated = (context) => {
    return !!context.user_id;
};

export const hasRoles = async (user_id, roles) => {
    const userRoles = await db.Role.findAll({
        include: [{
            model: db.User,
            where: {id: user_id},
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

