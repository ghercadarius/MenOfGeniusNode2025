import db from '../../models/index.js';

class ProductRepository {
    static async getAll() {
        return await db.Product.findAll();
    }

    static async getById(id) {
        return await db.Product.findOne({
            where: {id}
        });
    }

    static save(product) {
        return db.Product.create(product);
    }
}

export default ProductRepository;
