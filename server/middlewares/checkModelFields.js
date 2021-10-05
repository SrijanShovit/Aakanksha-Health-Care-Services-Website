const checkModelFields = (model, fields) => {
  const schemaFields = Object.keys(model.schema.tree);
  let message = '',
    wrongFieldNames = [];
  fields.forEach((field) => {
    if (!schemaFields.includes(field)) {
      wrongFieldNames.push(field);
    }
  });

  if (wrongFieldNames.length > 0) {
    message = `Fields don't exist - { ${wrongFieldNames.splice(',')} }.`;
  }

  return message;
};

module.exports = checkModelFields;
