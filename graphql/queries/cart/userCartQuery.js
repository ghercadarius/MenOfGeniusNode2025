import {securedResolver} from "../../../core/utils/securedResolver.js";
import {getUserCart} from "../../../core/services/cartService.js";
import cartType from "../../types/cart/cartType.js";

const userCartQueryResolver = async (_, args, context) => {
    return await getUserCart(context.userId);
}

const userCartQuery = {
    //get all products from current users cart
    type: cartType,
    resolve: securedResolver()(userCartQueryResolver),
}

export default userCartQuery;