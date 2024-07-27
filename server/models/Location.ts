import mongoose from "mongoose";

interface LocationAttrs{
  id: Number,
  location: String,
  lat: Number,
  long: Number,
}

interface LocationModel extends mongoose.Model<LocationDoc>{
  build(attrs: LocationAttrs): LocationDoc;
}

interface LocationDoc extends mongoose.Document{
  id: Number,
  location: String,
  lat: Number,
  long: Number,
}

const LocationSchema = new mongoose.Schema({
  id: Number,
  location: String,
  lat: Number,
  long: Number,
});

const Location = mongoose.model<LocationDoc, LocationModel>('Location', LocationSchema);

export { Location, LocationDoc }
