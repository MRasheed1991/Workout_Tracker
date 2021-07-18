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
  } catch (error) {}
};
