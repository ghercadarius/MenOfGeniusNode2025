import {securedResolver} from "../../../core/utils/securedResolver.js";
import {GraphQLInt} from "graphql";
import {removeProductFromCart} from "../../../core/services/cartService.js";
import cartType from "../../types/cart/cartType.js";

const removeProductFromCartResolver = async (_, args, context) => {
    return await removeProductFromCart(context.userId, args.productId);
}

const removeProductFromCartMutation = {
    type: cartType,
    args: {
        productId: {type: GraphQLInt},
    },
    resolve: securedResolver()(removeProductFromCartResolver),
}

export default removeProductFromCartMutation;