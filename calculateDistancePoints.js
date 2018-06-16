const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (
    hillSize === "normal" &&
    typeof distance === "number" &&
    typeof kPoint === "number"
  ) {
    return 60 + (distance - kPoint) * 2;
  } else if (
    hillSize === "large" &&
    typeof distance === "number" &&
    typeof kPoint === "number"
  ) {
    return 60 + (distance - kPoint) * 1.8;
  } else if (
    hillSize === "mammoth" &&
    typeof distance === "number" &&
    typeof kPoint === "number"
  ) {
    return 120 + (distance - kPoint) * 1.2;
  } else {
    return "Wrong type of data";
  }
};

module.exports = calculateDistancePoints;
