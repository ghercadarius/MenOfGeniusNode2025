import {GraphQLFloat, GraphQLList} from "graphql";
import productType from "../../types/product/productType.js";
import {GraphQLString} from "graphql/index.js";
import {getAllProducts} from "../../../core/services/productService.js";

const productsQueryResolver = async (_, { category, minPrice, maxPrice }) => {
    return await getAllProducts(category, minPrice, maxPrice);
}

const productsQuery = {
    type: new GraphQLList(productType),
    args: {
        category: {type: GraphQLString},
        minPrice: {type: GraphQLFloat},
        maxPrice: {type: GraphQLFloat},
    },
    resolve: productsQueryResolver,
};

export default productsQuery;