import {getProductById} from "../../../core/services/productService.js";
import productType from "../../types/product/productType.js";
import {GraphQLInt} from "graphql";

const productQueryResolver = async (_, {id}) => {
    return await getProductById(id);
}
const productQuery = {
    type: productType,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: productQueryResolver,
};

export default productQuery;