import {GraphQLInt} from "graphql";
import cartType from "../../types/cart/cartType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import {addProductToMyCart} from "../../../core/services/cartService.js";

const addProductToCartResolver = async (_, args, context) => {
    return await addProductToMyCart(context.user_id, args.productId);
}

const addProductToCartMutation = {
    type: cartType,
    args: {
        productId: { type: GraphQLInt },
    },
    resolve: securedResolver()(addProductToCartResolver),
}

export default addProductToCartMutation;