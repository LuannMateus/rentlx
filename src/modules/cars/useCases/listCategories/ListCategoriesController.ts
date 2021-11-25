import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    return res.status(200).json(await listCategoriesUseCase.execute());
  }
}

export { ListCategoriesController };
