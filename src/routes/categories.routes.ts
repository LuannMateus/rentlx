import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/importCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get('/categories', listCategoriesController.handle);

categoriesRoutes.post('/categories', createCategoryController.handle);

categoriesRoutes.post(
  '/categories/import',
  upload.single('file'),
  importCategoryController.handle
);

export { categoriesRoutes };
