import { Router } from 'express';
import {
  createDataTemperature,
  getDataTemperature
} from '../controllers/temperature.controller';
const router = Router();

router.get('/Receber', getDataTemperature);
router.post('/Enviar', createDataTemperature);

export default router;