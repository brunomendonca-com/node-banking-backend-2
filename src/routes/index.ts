import { Router } from 'express';
import { getRepository } from 'typeorm';

import transactionsRouter from './transactions.routes';
import Category from '../models/Category';

const routes = Router();

routes.use('/transactions', transactionsRouter);
routes.get('/categories', async (request, response) => {
  const categoriesRepository = getRepository(Category);

  const categories = await categoriesRepository.find();
  response.json(categories);
});

export default routes;
