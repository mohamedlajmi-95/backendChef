const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  imageArt: { type: String, required: true, unique: true },
  description: {type:Number, require:false},
 
});

module.exports = mongoose.model("categories", categoriesSchema);
