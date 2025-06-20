async function sendPrompt() {
  const prompt = document.getElementById('promptInput').value;
  const responseBox = document.getElementById('response');
  responseBox.innerText = "Thinking...";

  try {
    const response = await fetch('https://mindguide-backend.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    responseBox.innerText = data.reply;
  } catch (error) {
    responseBox.innerText = 'Error: Could not reach the backend.';
  }
}

function usePreset(text) {
  document.getElementById('promptInput').value = text;
  sendPrompt();
}
