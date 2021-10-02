const checkFields = (body, fields) => {
  let message = '',
    reqFields = [];
  fields.forEach((field) => {
    if (!body.hasOwnProperty(field) || body[field] == '') {
      reqFields.push(field);
    }
  });

  if (reqFields.length > 0) {
    message = `Please provide { ${reqFields.splice(',')} }`;
  }

  return message;
};

module.exports = checkFields;
