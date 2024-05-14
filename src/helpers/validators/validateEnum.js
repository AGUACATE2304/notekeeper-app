function validateEnum(note) {
  const allowedStatusValues = ["pending", "in-progress", "completed"];

  if ("status" in note && !allowedStatusValues.includes(note.status)) {
    return false;
  }
  return true;
}

module.exports = validateEnum;
