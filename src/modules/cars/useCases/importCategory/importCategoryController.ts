import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { file } = req;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return res.end();
  }
}

export { ImportCategoryController };
