import { NextFunction, Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, description } = req.body;

    await this.createCategoryUseCase.execute({ name, description });

    return res.status(201).end();
  }
}

export { CreateCategoryController };
