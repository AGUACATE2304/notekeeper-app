function validateNonEmpty(note) {
  if (
    !note.name ||
    !note.description ||
    note.name.trim() === "" || // .trim ( delete all space betwheen words)
    note.description.trim() === ""
  ) {
    return false;
  }
  return true;
}

module.export = validateNonEmpty;
