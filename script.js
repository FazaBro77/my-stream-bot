async function loadComments() {
  const videoId = document.getElementById('videoId').value;
  const res = await fetch(/.netlify/functions/getComments?videoId=);
  const data = await res.json();
  document.getElementById('comments').innerText = data.comments.join('\n');
}

async function postComment() {
  const videoId = document.getElementById('videoId').value;
  const text = document.getElementById('comment').value;
  await fetch('/.netlify/functions/postComment', {
    method: 'POST',
    body: JSON.stringify({ videoId, text })
  });
  loadComments();
}

async function translateText() {
  const text = document.getElementById('translateText').value;
  const res = await fetch('/.netlify/functions/translate', {
    method: 'POST',
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  document.getElementById('translation').innerText = data.translation;
}
