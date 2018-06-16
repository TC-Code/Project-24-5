const calculateStylePoints = styleNotes => {
  if (!Array.isArray(styleNotes)) {
    return "Wrong type of styleNotes";
  } else if (styleNotes.length !== 5) {
    return "Not enough judges notes";
  } else if (styleNotes.filter(note => typeof note === "number").length < 5) {
    return "Note should be a number";
  }

  const maxNote = Math.max(...styleNotes);
  const minNote = Math.min(...styleNotes);
  const result = styleNotes.reduce((sum, current) => sum + current, 0);
  return result - maxNote - minNote;
};

module.exports = calculateStylePoints;
