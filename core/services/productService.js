import productRepository from "../repositories/productRepository.js";
import {handleError} from "../utils/handleError.js";

export const uploadProduct = async (product, userId) => {
    if (product.price <= 0)
        handleError("Price must be greater than 0", 'BAD_REQUEST');

    product.userId = userId;
    return await productRepository.save(product);
}

export const getProductById = async (id) => {
    const product = await productRepository.getById(id);
    if (!product)
        handleError("Product not found", 'BAD_REQUEST');
    return product;
}

export const getAllProducts = async (category, minPrice, maxPrice) => {
    if(minPrice > maxPrice)
        handleError("Min price cannot be greater than max price", 'BAD_REQUEST');
    const products = await productRepository.getAll(category, minPrice, maxPrice);
    if (!products || products.length === 0)
        handleError("There are no products that match your filters.", 'BAD_REQUEST');
    return products;
}

