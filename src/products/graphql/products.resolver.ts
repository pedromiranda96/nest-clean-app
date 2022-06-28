import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './input/create-product.input';
import { ProductSchema } from './product.schema';
import { CreateProductUseCase } from 'src/@core/application/use-cases/create-product/create-product.use-case';
import { GetProductByIdUseCase } from 'src/@core/application/use-cases/get-product-by-id/get-product-by-id.use-case';
import { GetAllProductsUseCase } from 'src/@core/application/use-cases/get-all-products/get-all-products.use-case';

@Resolver(() => ProductSchema)
export class ProductsResolver {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
  ) {}

  @Mutation(() => ProductSchema)
  async createProduct(@Args('data') data: CreateProductInput) {
    return this.createProductUseCase.execute(data);
  }

  @Query(() => ProductSchema)
  async product(@Args('id') id: string) {
    return this.getProductByIdUseCase.execute({ id });
  }

  @Query(() => [ProductSchema])
  async products() {
    return this.getAllProductsUseCase.execute();
  }
}
