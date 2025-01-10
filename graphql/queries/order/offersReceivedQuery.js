import orderType from "../../types/order/orderType.js";
import {GraphQLList} from "graphql";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {getAllOffersReceived} from "../../../core/services/orderService.js";

const offersReceivedResolver = async (_, args, context) => {
    return await getAllOffersReceived(context.userId);
}

const offersReceivedQuery = {
    type: new GraphQLList(orderType),
    resolve: securedResolver()(offersReceivedResolver),
};

export default offersReceivedQuery;