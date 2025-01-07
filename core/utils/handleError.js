import {GraphQLError} from 'graphql';

export const handleError = (message, code) => {
    throw new GraphQLError(message, {
        extensions: {code},
    });
};
