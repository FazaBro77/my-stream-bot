exports.handler = async function(event, context) {
  const { videoId, text } = JSON.parse(event.body);
  return { statusCode: 200, body: JSON.stringify({ result: Комментарий '' для видео '' отправлен }) };
};
