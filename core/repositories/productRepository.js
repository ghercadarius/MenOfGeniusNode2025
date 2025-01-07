import db from '../../models/index.js';
import categoryType from "../../graphql/types/product/categoryType.js";

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
        return await db.Product.findOne({
            where: {id}
        });
    }

    static save(product) {
        return db.Product.create(product);
    }

    // static async getByCategory(category){
    //     return await db.Product.findAll({
    //         where: {
    //             category: {
    //                 [db.Sequelize.Op.like]: `%${category}%`,
    //
    //             }
    //         }
    //     });
    // }
}

export default ProductRepository;
