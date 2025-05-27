import Address from '../models/Address.js';

export const addAddress = async (req, res) => {
  const address = await Address.create({ ...req.body, user: req.user._id });
  res.json(address);
};

export const getAddress = async (req, res) => {
  const address = await Address.findOne({ user: req.user._id });
  res.json(address);
};
