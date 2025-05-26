const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Dataset', DatasetSchema);
