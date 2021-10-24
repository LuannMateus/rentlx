import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }
  public findAll(): Category[] {
    return this.categories;
  }

  public findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  public save({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { PostgresRepository };
