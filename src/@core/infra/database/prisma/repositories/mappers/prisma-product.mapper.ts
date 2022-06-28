import { Product as PrismaProduct } from '@prisma/client';
import { Product } from 'src/@core/domain/products/product.entity';

export class PrismaProductMapper {
  static toDomain({ id, title, description, price }: PrismaProduct): Product {
    return Product.create({ title, description, price }, id);
  }

  static toPersistence({
    id,
    title,
    description,
    price,
  }: Product): PrismaProduct {
    return { id, title, description, price };
  }
}
