export type Data = {
  products: Product[];
};

export type Product = {
  name: string;
  slug: string;
  category: string;
  image: string;
  isFeatured: boolean;
  featuredImage: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
};
