const Dataset = require('../models/Dataset');

exports.getAll = async (req, res) => {
  const datasets = await Dataset.find().populate('uploadedBy', 'name');
  res.json(datasets);
};

exports.getById = async (req, res) => {
  const dataset = await Dataset.findById(req.params.id).populate('uploadedBy', 'name');
  if (!dataset) return res.status(404).json({ msg: 'Not found' });
  res.json(dataset);
};

exports.create = async (req, res) => {
  const newDs = new Dataset({ ...req.body, uploadedBy: req.user.id });
  const dataset = await newDs.save();
  res.status(201).json(dataset);
};
