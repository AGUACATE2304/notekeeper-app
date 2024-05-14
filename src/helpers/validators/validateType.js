function validateType(note) {
  const expectedTypes = {
    name: "string",
    description: "string",
    important: "boolean",
    status: "string",
    dueDate: "string",
  };

  for (let key in note) { // in ( check if there is key in object note) act like value in each data 
    if (!(key in expectedTypes) || typeof note[key] !== expectedTypes[key]) {
      return false;
    }
  }
  return true;
}

module.exports = validateType;
