import {GraphQLObjectType} from 'graphql';
import userQuery from '../queries/user/userQuery.js';
import usersQuery from '../queries/user/usersQuery.js';

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,
    },
});


export default queryType;