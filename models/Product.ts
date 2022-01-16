import { model, models, Schema } from "mongoose";
import { Product } from "../types/Data.types";

const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    featuredImage: { type: String, required: false },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

const ProductModel = models.Product || model<Product>("Product", productSchema);

export default ProductModel;
