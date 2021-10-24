import { Router, Request, Response, NextFunction } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post(
  '/specifications',
  (req: Request, res: Response, next: NextFunction) => {
    createSpecificationController.handle(req, res, next);
  }
);

export { specificationsRoutes };
