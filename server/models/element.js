var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ElementSchema = new Schema({
  name: { type: String },
  price: { type: String },
  description: { type: String },
  image_url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category'} //Referencing in mongoose
});

module.exports = mongoose.model("Element", ElementSchema);
