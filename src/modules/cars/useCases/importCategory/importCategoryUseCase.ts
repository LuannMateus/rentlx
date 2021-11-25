import fs from 'fs';
import csvParser from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  private async loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParser();

      stream.pipe(parseFile);

      parseFile.on('data', (line) => {
        const [name, description] = line;

        categories.push({
          name,
          description,
        });
      });

      parseFile.on('end', () => {
        fs.promises.unlink(file.path);
        resolve(categories);
      });

      parseFile.on('error', (error) => {
        reject(error);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories: IImportCategory[] = await this.loadCategories(file);

    categories.map(async (category): Promise<void> => {
      const { name, description } = category;

      const existsCategory = await this.categoriesRepository.findByName(name);

      if (!existsCategory) {
        await this.categoriesRepository.save({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
