import express, { Request, Response } from 'express';
const router = express.Router();
import {Location} from "../models/Location"

router.get('/', async (req: Request, res: Response) => {
  const locations = await Location.find();
  res.json(locations);
});

export {router as LocationRouter}
