import { Router, Request, Response, NextFunction } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { PostgresRepository } from '../repositories/PostgresRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const postgresRepository = new PostgresRepository();

categoriesRoutes.get(
  '/categories',
  (req: Request, res: Response, next: NextFunction) => {
    const categories = categoriesRepository.findAll();

    return res.status(200).json(categories);
  }
);

categoriesRoutes.post(
  '/categories',
  (req: Request, res: Response, next: NextFunction) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(postgresRepository);

    createCategoryService.execute({ name, description });

    return res.status(201).end();
  }
);

export { categoriesRoutes };
