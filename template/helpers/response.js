const response = (body = {}, status = 200) => ({
  statusCode: status,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  },
  body: JSON.stringify(body),
  isBase64Encoded: false
});

module.exports = response;
