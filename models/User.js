const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});
module.exports = mongoose.model('User', userSchema);
