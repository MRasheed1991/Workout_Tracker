const router = require("express").Router();

//require in the controller function
router.get("/api/workouts", getLastWorkout);

router.put("/api/workouts/:id", addExercise);

router.post("/api/workouts", createWorkout);

router.get("/api/workouts/range", getWorkoutsRange);

module.exports = router;
