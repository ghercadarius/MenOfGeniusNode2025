import {GraphQLEnumType} from 'graphql';
import {ProductCategoryEnum} from "../../../models/enums/productCategoryEnum.js";

const CategoryType = new GraphQLEnumType({
    name: 'Category',
    values: {
        T_SHIRTS: {value: ProductCategoryEnum.T_SHIRTS},
        SHIRTS: {value: ProductCategoryEnum.SHIRTS},
        PANTS: {value: ProductCategoryEnum.PANTS},
        JEANS: {value: ProductCategoryEnum.JEANS},
        SHORTS: {value: ProductCategoryEnum.SHORTS},
        DRESSES: {value: ProductCategoryEnum.DRESSES},
        SKIRTS: {value: ProductCategoryEnum.SKIRTS},
        SWEATERS: {value: ProductCategoryEnum.SWEATERS},
        HOODIES: {value: ProductCategoryEnum.HOODIES},
        JACKETS: {value: ProductCategoryEnum.JACKETS},
        COATS: {value: ProductCategoryEnum.COATS},
        SNEAKERS: {value: ProductCategoryEnum.SNEAKERS},
        BOOTS: {value: ProductCategoryEnum.BOOTS},
        SANDALS: {value: ProductCategoryEnum.SANDALS},
        FORMAL_SHOES: {value: ProductCategoryEnum.FORMAL_SHOES},
        CASUAL_SHOES: {value: ProductCategoryEnum.CASUAL_SHOES},
        SLIPPERS: {value: ProductCategoryEnum.SLIPPERS},
        FLIP_FLOPS: {value: ProductCategoryEnum.FLIP_FLOPS},
    }
});

export default CategoryType;
