const response = require("./response");

const wrapper = fn => async (event, context) => {
  try {
    const body = await fn(event, context);

    return response(body);
  } catch (error) {
    return response(error.message, 500);
  }
};

module.exports = wrapper;
