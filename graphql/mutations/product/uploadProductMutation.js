import productType from "../../types/product/productType.js";
import {securedResolver} from "../../../core/utils/securedResolver.js";
import productInputType from "../../types/product/productInputType.js";
import {uploadProduct} from "../../../core/services/productService.js";

const uploadProductResolver = async (_, args, context) => {
    return await uploadProduct(args.product, context.userId);
}

const uploadProductMutation = {
    type: productType,
    args: {
        product: {type: productInputType},
    },
    resolve: securedResolver()(uploadProductResolver),
}

export default uploadProductMutation;