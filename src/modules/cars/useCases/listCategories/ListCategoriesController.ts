import { NextFunction, Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json(this.listCategoriesUseCase.execute());
  }
}

export { ListCategoriesController };
