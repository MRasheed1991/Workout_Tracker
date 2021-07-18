const path = require("path");

const renderExercisePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};
const renderStatsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

module.exports = { renderExercisePage, renderStatsPage };
