const calculateDistancePoints = require("./calculateDistancePoints");
const calculateStylePoints = require("./calculateStylePoints");

const calculateTotalPoints = (
  distance,
  hillSize,
  kPoint,
  styleNotes,
  windFactor,
  gateFactor
) => {
  if (typeof windFactor !== "number" || typeof gateFactor !== "number") {
    return "Wrong value of factor";
  }

  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  const totalPoints = (
    distancePoints +
    stylePoints +
    windFactor +
    gateFactor
  ).toFixed(1);

  return totalPoints;
};

module.exports = calculateTotalPoints;
