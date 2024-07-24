import express, { Request, Response } from "express"
import { Document } from "../models/Document";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const documents = await Document.find();
  res.json(documents);
});

router.post('/', async (req: Request, res: Response) => {
  const newDocument = new Document(req.body);
  await newDocument.save();
  res.json(newDocument);
});

export { router as DocumentRouter }
