import { Product } from './product.entity';

export interface ProductsRepository {
  createProduct: (product: Product) => Promise<void>;
  // updateProduct: (product: Product) => Promise<void>;
  findAllProducts: () => Promise<Product[]>;
  findProductById: (productId: string) => Promise<Product | null>;
}
