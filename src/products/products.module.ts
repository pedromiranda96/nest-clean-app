import { Module } from '@nestjs/common';
import { ProductsResolver } from './graphql/products.resolver';
import { CreateProductUseCase } from 'src/@core/application/use-cases/create-product/create-product.use-case';
import { GetAllProductsUseCase } from 'src/@core/application/use-cases/get-all-products/get-all-products.use-case';
import { GetProductByIdUseCase } from 'src/@core/application/use-cases/get-product-by-id/get-product-by-id.use-case';
import { ProductsRepository } from 'src/@core/domain/products/products.repository';
import { PrismaProductsRepository } from 'src/@core/infra/database/prisma/repositories/prisma-products.repository';

@Module({
  providers: [
    {
      provide: PrismaProductsRepository,
      useClass: PrismaProductsRepository,
    },
    {
      provide: CreateProductUseCase,
      useFactory: (productsRepository: ProductsRepository) => {
        return new CreateProductUseCase(productsRepository);
      },
      inject: [PrismaProductsRepository],
    },
    {
      provide: GetProductByIdUseCase,
      useFactory: (productsRepository: ProductsRepository) => {
        return new GetProductByIdUseCase(productsRepository);
      },
      inject: [PrismaProductsRepository],
    },
    {
      provide: GetAllProductsUseCase,
      useFactory: (productsRepository: ProductsRepository) => {
        return new GetAllProductsUseCase(productsRepository);
      },
      inject: [PrismaProductsRepository],
    },
    ProductsResolver,
  ],
})
export class ProductsModule {}
