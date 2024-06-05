import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },
  },
  { timestamps: true }
);

let Test = mongoose.model("test", testSchema);
