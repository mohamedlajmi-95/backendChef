const mongoose = require("mongoose");
const articlesSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  imageArt: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: {type:Number, require:false},
  categoryID: { type:mongoose.Schema.Types.ObjectId, ref:"Category" },
});

module.exports = mongoose.model("articles", articlesSchema);
