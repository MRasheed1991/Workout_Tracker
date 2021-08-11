const router = require("express").Router();
const {
  getLastWorkout,
  addExercises,
  createWorkout,
  getWorkoutsRange,
} = require("../../controller/api/index");

//require in the controller function
router.get("/api/workouts", getLastWorkout);

router.put("/api/workouts/:id", addExercises);

router.post("/api/workouts", createWorkout);

router.get("/api/workouts/range", getWorkoutsRange);

module.exports = router;
