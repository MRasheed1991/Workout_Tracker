const router = require("express").Router();
//requiring function from controller folder
const {
  renderExercisePage,
  renderStatsPage,
} = require("../../controller/view/index");

router.get("/exercise", renderExercisePage);
router.get("/stats", renderStatsPage);

module.exports = router;
