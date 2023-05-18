import {model, Schema} from "mongoose";

import {ProductData, SchemaName} from "../types";


const productSchema = new Schema<ProductData>({
    id: {type: String, required: true},
    idProduct: {type: String, required: true},
    name: {type: String, required: true},
    size: [{
        name: {
            type: String,
            enum: ['35.5', '36', '36.5', '37', '37.5', '38', '38.5', '39', '40', '40.5', '41', '42', '42.5', '43'],
            required: true
        },
        priceEuro: {type: String, required: true},
        inStock: {type: Boolean, required: true}
    }],
    colorway: [{type: String}],
    description: {type: String, required: true},
    releaseDate: {type: String, required: true},
    img: {type: String, required: true},
});


module.exports = model<ProductData>(SchemaName.product, productSchema);