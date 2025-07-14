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

    // Mode display name
    const modeMap = {
      llm_only: "LLM Only",
      llm_csv: "LLM + Dataset Enhanced"
    };
    const displayMode = modeMap[mode] || "Unknown Mode";

    // Category display name
    const categoryMap = {
      info: "Information Summary",
      reviews: "User Reviews",
      unknown: "General Support"
    };
    const displayCategory = categoryMap[data.category] || "N/A";

    debugBox.innerHTML = `
      <strong>Mode:</strong> ${displayMode}<br>
      <strong>Category:</strong> ${displayCategory}<br>
      <strong>Tokens:</strong> ${data.tokens || 0}<br>
      <strong>Response Time:</strong> ${data.time || 0}s
    `;
  } catch (error) {
    responseBox.innerText = 'Error: Could not reach the backend.';
    debugBox.innerText = '';
    console.error('Fetch error:', error);
  }
}
