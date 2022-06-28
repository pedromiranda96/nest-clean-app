import { ProductsRepository } from 'src/@core/domain/products/products.repository';

export interface GetProductByIdParams {
  id: string;
}

export class GetProductByIdUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute({ id }: GetProductByIdParams) {
    const product = await this.productsRepository.findProductById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product.withDestructuredProps();
  }
}
