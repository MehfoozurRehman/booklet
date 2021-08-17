import mongoose from "mongoose";

const Dataschema = mongoose.Schema({
  name: String,
  imgURL: String,
});

export default mongoose.model("dataSchema", Dataschema);
