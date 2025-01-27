import db from '../../models/index.js';
import {handleError} from "../utils/handleError.js";
import Sequelize from "sequelize";

class ProductRepository {
    static async getAll(category, minPrice, maxPrice) {
        const whereConditions = {};

        whereConditions.availability = true;

        if (category !== undefined)
            whereConditions.category = {
                [db.Sequelize.Op.like]: `%${category}%`,
            };

        if (minPrice !== undefined && maxPrice !== undefined)
            whereConditions.price = {
                [db.Sequelize.Op.between]: [minPrice, maxPrice]
            };

        if (minPrice !== undefined && maxPrice === undefined)
            whereConditions.price = {
                [db.Sequelize.Op.gte]: minPrice
            };

        if (minPrice === undefined && maxPrice !== undefined)
            whereConditions.price = {
                [db.Sequelize.Op.lte]: maxPrice
            };

        return await db.Product.findAll({
            where: whereConditions
        });
    }

    static async getById(id) {
        const product = await db.Product.findOne({
            where: {id, availability: true}
        });
        if (!product)
            handleError("Product not found", 'BAD_REQUEST');
        return product;
    }

    static async getByPk(id) {
        const product = await db.Product.findByPk(id, {
            where: {availability: true}
        });
        if (!product)
            handleError("Product not found", 'BAD_REQUEST');
        return product;
    }

    static save(product) {
        return db.Product.create(product);
    }

    static async destroyProduct(id) {
        const product = await db.Product.findByPk(id);
        if (!product)
            handleError("Product not found", 'BAD_REQUEST');
        const sequelize = new Sequelize('database', 'username', 'password', {
            dialect: 'sqlite',
            storage: './db.sqlite',
            logging: console.log,
        });
        const result = await sequelize.query('DELETE FROM Products WHERE id = ?', {
            replacements: [id],
            type: Sequelize.QueryTypes.DELETE,
        });

        if (result[0].affectedRows === 0) handleError("Product not found", 'BAD_REQUEST');
        return result;
        // return await db.Product.destroy({
        //     where: {id}
        // });
    }

    static async setInactiveStatus(id) {
        const product = await db.Product.findByPk(id,
            {where: {availability: true}}
        );
        if (!product)
            handleError("Product not found", 'BAD_REQUEST');
        product.availability = false;
        return await product.save();
    }

    static async getMyProducts(userId) {
        return await db.Product.findAll({
            where: {userId, availability: true}
        });
    }
}

export default ProductRepository;
