import orderType from "../../types/order/orderType.js";
import {GraphQLBoolean, GraphQLInt} from "graphql";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {respondToOffer} from "../../../core/services/orderService.js";

const respondToOfferResolver = async (_, args, context) => {
    return await respondToOffer(context.userId, args.orderId, args.response);
}


const respondToOfferMutation = {
    type: orderType,
    args: {
        orderId: {type: GraphQLInt},
        response: {type: GraphQLBoolean},
    },
    resolve: securedResolver()(respondToOfferResolver)
}

export default respondToOfferMutation;