import { Request, Response, Router } from 'express';
import { calculatorController } from './controllers';
const router = Router();

router.use('/api', (request: Request, response: Response) => {
  return response.status(200).send('API OK');
});

router.use('/calculator', calculatorController.routes);

export { router };
