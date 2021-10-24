import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findAll(): Category[];

  findByName(name: string): Category;

  save({ name, description }: ICreateCategoryDTO);
}

export { ICategoriesRepository, ICreateCategoryDTO };
