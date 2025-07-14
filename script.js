async function sendPrompt() {
  const prompt = document.getElementById('promptInput').value;
  const mode = document.getElementById('modeSelect').value;
  const responseBox = document.getElementById('response');
  const debugBox = document.getElementById('debug');

  responseBox.innerText = "Thinking...";
  debugBox.innerText = "";

  try {
    const response = await fetch('https://mindguide-backend.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, mode })
    });

    const data = await response.json();

    responseBox.innerText = data.reply;

    debugBox.innerHTML = `
      <strong>Category:</strong> ${data.category || 'N/A'}<br>
      <strong>Tokens:</strong> ${data.tokens || 0}<br>
      <strong>Response Time:</strong> ${data.time || 0}s
    `;
  } catch (error) {
    responseBox.innerText = 'Error: Could not reach the backend.';
    debugBox.innerText = '';
    console.error('Fetch error:', error);
  }
}

function usePreset(text) {
  document.getElementById('promptInput').value = text;
  sendPrompt();
}
