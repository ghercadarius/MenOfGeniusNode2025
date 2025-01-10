import {securedResolver} from "../../../core/utils/securedResolver.js";
import productType from "../../types/product/productType.js";
import {GraphQLList} from "graphql";
import {getMyProducts} from "../../../core/services/productService.js";

const myProductsResolver = async (parent, args, context) => {
    return await getMyProducts(context.userId);
}

const myProductsQuery = {
    type: new GraphQLList(productType),
    resolve: securedResolver()(myProductsResolver)
}

export default myProductsQuery;