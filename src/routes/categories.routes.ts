import { Router, Request, Response, NextFunction } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.get(
  '/categories',
  (req: Request, res: Response, next: NextFunction) => {
    listCategoriesController.handle(req, res, next);
  }
);

categoriesRoutes.post(
  '/categories',
  (req: Request, res: Response, next: NextFunction) => {
    createCategoryController.handle(req, res, next);
  }
);

export { categoriesRoutes };
