import { randomUUID } from 'crypto';

export abstract class Entity<T> {
  public readonly id: string;
  protected props: T;

  constructor(props: T, id?: string) {
    this.props = props;

    // take the id generation responsibility away from the database
    this.id = id || randomUUID();
  }

  withDestructuredProps() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
