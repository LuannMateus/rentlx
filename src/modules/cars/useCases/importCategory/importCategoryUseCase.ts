import fs from 'fs';
import csvParser from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

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

      const existsCategory = this.categoriesRepository.findByName(name);

      if (!existsCategory) {
        this.categoriesRepository.save({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
