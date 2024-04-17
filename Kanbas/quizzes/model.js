import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizzesModule", schema);
export default model;
