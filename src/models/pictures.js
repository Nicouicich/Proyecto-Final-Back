import mongoose from "mongoose";
export const pictureCollectionName = "pictures";

const picturesSchema = new mongoose.Schema(
  {
  },
  { versionKey: false, timestamps:true }
);

export const CategoryModel = mongoose.model(
  pictureCollectionName,
  picturesSchema
);
