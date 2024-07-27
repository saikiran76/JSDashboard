import express, { Request, Response } from 'express';
import mongoose, { Document, Types } from 'mongoose';
import {Location, LocationDoc} from "../models/Location"
import { Shipment, ShipmentDoc } from '../models/Shipment';

const router = express.Router();
router.get('/', async (req: Request, res: Response) => {
  const { status } = req.query;

  try {
    if (!status) {
      const locations: (Document<unknown, {}, LocationDoc> & LocationDoc & { _id: Types.ObjectId })[] = await Location.find();
      return res.json({ locations });
    }

    
    const shipments: (Document<unknown, {}, ShipmentDoc> & ShipmentDoc & { _id: Types.ObjectId })[] = await Shipment.find({ milestone: status });

    
    const locationNames = new Set<string>();
    shipments.forEach(shipment => {
      locationNames.add(shipment.recipt);
      locationNames.add(shipment.loading);
      locationNames.add(shipment.discharge);
      locationNames.add(shipment.delivery);
    });

    
    const locations: (Document<unknown, {}, LocationDoc> & LocationDoc & { _id: Types.ObjectId })[] = await Location.find({
      location: { $in: Array.from(locationNames) }
    });

    
    const combinedData = shipments.map(shipment => {
      const shipmentLocations = locations.filter(loc => 
        loc.location === shipment.recipt || 
        loc.location === shipment.loading ||
        loc.location === shipment.discharge ||
        loc.location === shipment.delivery
      );
      return {
        ...shipment.toObject(),
        locations: shipmentLocations
      };
    });

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export {router as LocationRouter}
