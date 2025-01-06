import {saveProduct} from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";

export const uploadProduct = async (product, user_id) => {
    if (product.price <= 0)
        handleError("Price must be greater than 0", 'BAD_REQUEST');

    product.userId = user_id;
    return await saveProduct(product);
}
