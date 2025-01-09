import {securedResolver} from "../../../core/utils/securedResolver.js";
import orderType from "../../types/order/orderType.js";
import {GraphQLList} from "graphql";

const createOrderResolver = async (parent, args, context) => {
    return createOrder(context.userId);
}
const createOrderMutation = {
    type: new GraphQLList(orderType),
    resolve: securedResolver()(createOrderResolver)
}

export default createOrderMutation;