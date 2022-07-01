import Doing from "../model/Doing.js";

export const createTodo = async (req, res) => {
  const newTodo = new Doing(req.body);
  try {
    await newTodo.save();
    res.status(200).json("to do is created");
  } catch (err) {
    res.status(401).json(err);
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Doing.find();

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Doing.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedTodo);
  } catch (err) {
    res.status(401).json(err);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Doing.findByIdAndDelete(req.params.id);
    res.status(201).json("to do has been deleted");
  } catch (err) {
    res.status(401).json(err);
  }
};
