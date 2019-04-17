const { wrapper } = require("../../helpers");

const handler = async (event, context) => {
  const name = event.pathParameters.name;

  return "hello " + name;
};

module.exports = {
  handler: wrapper(handler)
};
