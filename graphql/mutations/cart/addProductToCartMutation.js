import {GraphQLInt} from "graphql";
import cartType from "../../types/cart/cartType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {addProductToCart} from "../../../core/services/cartService.js";

const addProductToCartResolver = async (_, args, context) => {
    return await addProductToCart(context.userId, args.productId);
}

const addProductToCartMutation = {
    type: cartType,
    args: {
        productId: {type: GraphQLInt},
    },
    resolve: securedResolver()(addProductToCartResolver),
}

export default addProductToCartMutation;