import { Product } from 'src/@core/domain/products/product.entity';
import { ProductsRepository } from 'src/@core/domain/products/products.repository';

export interface CreateProductParams {
  title: string;
  description: string;
  price: number;
}

export class CreateProductUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({ title, description, price }: CreateProductParams) {
    const product = Product.create({
      title,
      description,
      price,
    });

    await this.productsRepository.createProduct(product);

    return product.withDestructuredProps();
  }
}
