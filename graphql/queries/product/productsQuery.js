import {GraphQLList} from "graphql";
import productType from "../../types/product/productType.js";
import {getAllProducts} from "../../../core/services/productService.js";

const productsQueryResolver = async () => {
    return getAllProducts();
}
const productsQuery = {
    type: new GraphQLList(productType),
    resolve: productsQueryResolver,
};

export default productsQuery;