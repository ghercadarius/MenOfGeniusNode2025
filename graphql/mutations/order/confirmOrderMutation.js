import {securedResolver} from "../../../core/utils/securedResolver.js";
import orderType from "../../types/order/orderType.js";
import {GraphQLInt} from "graphql";
import {confirmOrder} from "../../../core/services/orderService.js";

const confirmOrderResolver = async (parent, args, context) => {
    return await confirmOrder(context.userId, args.orderId);
}

const confirmOrderMutation = {
    type: orderType,
    args: {
        orderId: {type: GraphQLInt},
    },
    resolve: securedResolver()(confirmOrderResolver)
}

export default confirmOrderMutation;