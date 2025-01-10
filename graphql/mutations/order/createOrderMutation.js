import {securedResolver} from "../../../core/utils/securedResolver.js";
import orderType from "../../types/order/orderType.js";
import {GraphQLList} from "graphql";
import {createOrder} from "../../../core/services/orderService.js";

const createOrderResolver = async (parent, args, context) => {
    return createOrder(context.userId);
}
const createOrderMutation = {
    type: new GraphQLList(orderType),
    resolve: securedResolver()(createOrderResolver)
}

export default createOrderMutation;