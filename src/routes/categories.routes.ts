import { Router, Request, Response, NextFunction } from 'express';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import multer from 'multer';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.get(
  '/categories',
  (req: Request, res: Response, next: NextFunction) => {
    listCategoriesController.handle(req, res, next);
  }
);

categoriesRoutes.post(
  '/categories',
  (req: Request, res: Response, next: NextFunction) => {
    createCategoryController().handle(req, res, next);
  }
);

categoriesRoutes.post(
  '/categories/import',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    importCategoryController.handle(req, res, next);
  }
);

export { categoriesRoutes };
