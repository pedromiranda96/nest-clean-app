import { Product } from 'src/@core/domain/products/product.entity';
import { ProductsRepository } from 'src/@core/domain/products/products.repository';
import { prisma } from '../client';
import { PrismaProductMapper } from './mappers/prisma-product.mapper';

export class PrismaProductsRepository implements ProductsRepository {
  async createProduct(product: Product): Promise<void> {
    const data = PrismaProductMapper.toPersistence(product);

    await prisma.product.create({
      data,
    });
  }

  async findProductById(productId: string): Promise<Product> {
    const data = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!data) {
      return null;
    }

    return PrismaProductMapper.toDomain(data);
  }

  async findAllProducts(): Promise<Product[]> {
    const data = await prisma.product.findMany();

    return data.map((product) => PrismaProductMapper.toDomain(product));
  }
}
