import {securedResolver} from "../../../core/utils/securedResolver.js";
import orderType from "../../types/order/orderType.js";
import {GraphQLList} from "graphql";
import {getMyOrders} from "../../../core/services/orderService.js";

const myOrdersResolver = async (parent, args, context) => {
    return await getMyOrders(context.userId);
}

const myOrdersQuery = {
    type: new GraphQLList(orderType),
    resolve: securedResolver()(myOrdersResolver)
}

export default myOrdersQuery;