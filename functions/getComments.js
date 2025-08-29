const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const videoId = event.queryStringParameters.videoId;
  return { statusCode: 200, body: JSON.stringify({ comments: ['Пример комментария'] }) };
};
