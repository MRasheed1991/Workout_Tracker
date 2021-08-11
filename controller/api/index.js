const { Model } = require("mongoose");
const Workout = require("../../models/workout");

const getLastWorkout = async (req, res) => {
  try {
    const workout = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
};

const addExercises = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
};

const createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({});
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
};

const getWorkoutsRange = async (req, res) => {
  try {
    const workout = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7);
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getLastWorkout,
  addExercises,
  createWorkout,
  getWorkoutsRange,
};
