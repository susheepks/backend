const express = require("express");
const schema = require("../model/schema");

const alltasks = async (req, res) => {
  try {
    const details = await schema.find({});
    res.status(200).json(details);
    if (!details) {
      res.status(404).json({ message: "empty taks" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const getone = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await schema.findOne({ _id: id }).select("-__v");
    res.status(200).json(details);
    if (!details) {
      res.status(404).json({ message: "empty taks" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateall = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await schema
      .findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
      .select("-__v");
    res.status(200).json(details);
    if (!details) {
      res.status(404).json({ message: "not found task" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const addtask = async (req, res) => {
  try {
    const details = await schema.create(req.body);
    res.status(200).json(details);
    if (!details) {
      res.status(404).json({ message: "not found task" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteone = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await schema.findOneAndDelete({ _id: id }).select("-__v");
    res.status(200).json(details);
    if (!details) {
      res.status(404).json({ message: "not found task" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { alltasks, updateall, getone, addtask, deleteone };
