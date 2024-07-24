import mongoose from "mongoose"

interface DocAttrs{
  title: String,
  description: String,
}

interface DocModel extends mongoose.Model<DocumentDoc>{
  build(attrs: DocAttrs): DocumentDoc;
}

interface DocumentDoc extends mongoose.Document{
  title: String,
  description: String,
}

const DocumentSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Document = mongoose.model<DocumentDoc, DocModel>('Document', DocumentSchema);

export { Document }