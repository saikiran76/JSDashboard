import express, { Request, Response } from 'express';
const router = express.Router();

import {Shipment} from '../models/Shipment'

router.get('/', async (req: Request, res: Response) => {
  const shipments = await Shipment.find();
  res.json(shipments);
});

router.post('/shipment', async (req: Request, res: Response) => {
  const newShipment = new Shipment(req.body);
  await newShipment.save();
  res.json(newShipment);
});

export { router as ShipmentRouter }
