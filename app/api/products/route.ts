import { Router } from 'express';
import { ProductController } from './controller';

export const productsRouter = Router();

productsRouter.get('/', ProductController.getAll);
productsRouter.get('/:id', ProductController.getOne);