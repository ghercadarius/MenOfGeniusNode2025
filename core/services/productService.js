import productRepository from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";

export const uploadProduct = async (product, user_id) => {
    if (product.price <= 0)
        handleError("Price must be greater than 0", 'BAD_REQUEST');

    product.userId = user_id;
    return await productRepository.save(product);
}

export const getProductById = async (id) => {
    const product = await productRepository.getById(id);
    if (!product)
        handleError("Product not found", 'BAD_REQUEST');
    return product;
}

export const getAllProducts = async () => {
    return await productRepository.getAll();
}
