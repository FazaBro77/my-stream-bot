exports.handler = async function(event, context) {
  const { text } = JSON.parse(event.body);
  return { statusCode: 200, body: JSON.stringify({ translation: text + ' (перевод)' }) };
};
