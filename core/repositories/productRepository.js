import db from '../../models/index.js';
import categoryType from "../../graphql/types/product/categoryType.js";
import {handleError} from "../utils/handleError.js";

class ProductRepository {
    static async getAll(category, minPrice, maxPrice) {
        const whereConditions = {};

        if (category !== undefined)
            whereConditions.category = {
                [db.Sequelize.Op.like]: `%${category}%`,
            };

        if (minPrice !== undefined && maxPrice !== undefined)
            whereConditions.price = {
                [db.Sequelize.Op.between]: [minPrice, maxPrice]
            };

        if(minPrice !== undefined && maxPrice === undefined)
            whereConditions.price = {
                [db.Sequelize.Op.gte]: minPrice
            };

        if(minPrice === undefined && maxPrice !== undefined)
            whereConditions.price = {
                [db.Sequelize.Op.lte]: maxPrice
            };

        return await db.Product.findAll({
            where: whereConditions,
        });
    }

    static async getById(id) {
        const product = await db.Product.findOne({
            where: {id}
        });
        if(!product)
            handleError("Product not found", 'BAD_REQUEST');
        return product;
    }

    static save(product) {
        return db.Product.create(product);
    }

    static async destroyProduct(id) {
        const product = await db.Product.findByPk(id);
        if(!product)
            handleError("Product not found", 'BAD_REQUEST');
        return await product.destroy();
    }
}

export default ProductRepository;
