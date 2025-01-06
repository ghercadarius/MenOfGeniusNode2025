import db from '../../models/index.js';

export const getAllProducts = async () => {
    return await db.Product.findAll();
}

export const getProductById = async (id) => {
    return await db.Product.findOne({
        where: {
            id,
        }
    });
}

export const saveProduct = async (product) => {
    try {
        return await db.Product.create({
            name: product.name,
            description: product.description,
            price: product.price,
            userId: product.user_id,
        });
    } catch (error) {
        console.error('Error uploading product:', error);
        throw error;
    }

}

