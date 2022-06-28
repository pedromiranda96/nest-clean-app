import { ProductsRepository } from 'src/@core/domain/products/products.repository';

export class GetAllProductsUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute() {
    const products = await this.productsRepository.findAllProducts();

    return products.map((product) => product.withDestructuredProps());
  }
}
