import { NextFunction, Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response, next: NextFunction) {
    const { file } = req;

    this.importCategoryUseCase.execute(file);

    return res.end();
  }
}

export { ImportCategoryController };
