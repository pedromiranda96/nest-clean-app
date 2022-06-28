import { Entity } from '../entity';

export interface ProductProps {
  title: string;
  description: string;
  price: number;
}

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps, id?: string) {
    super(props, id);
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get price() {
    return this.props.price;
  }

  static create(props: ProductProps, id?: string) {
    return new Product(props, id);
  }
}
