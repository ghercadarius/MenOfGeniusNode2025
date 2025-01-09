import db from "../../models/index.js";

class CartProductRepository {
    static async addProductToCart(cartId, productId) {
        return await db.CartProducts.create({
            cartId,
            productId
        });
    }

    static async getCartProducts(cartId, productId) {
        return await db.CartProducts.findOne({
            where: {
                cartId,
                productId
            }
        });
    }

    static async removeProductFromCart(cartId, productId) {
        return await db.CartProducts.destroy({
            where: {
                cartId,
                productId
            }
        });
    }

    static async removeAllProductsFromCart(cartId) {
        return await db.CartProducts.destroy({
            where: {
                cartId
            }
        });
    }

}

export default CartProductRepository;