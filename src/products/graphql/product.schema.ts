import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductSchema {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price: number;
}
