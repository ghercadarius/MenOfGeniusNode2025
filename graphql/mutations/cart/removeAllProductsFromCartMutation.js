import cartType from "../../types/cart/cartType.js";
import {removeAllProductsFromCart} from "../../../core/services/cartService.js";

const removeAllProductsFromCartResolver = async (_, args, context) => {
    return await removeAllProductsFromCart(context.userId);
}

const removeAllProductsFromCartMutation = {
    type: cartType,
    resolve: removeAllProductsFromCartResolver,
}

export default removeAllProductsFromCartMutation;