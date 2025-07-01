#  MindGuide – Mental Health Assistant (Prompt-Only)

**MindGuide** is a lightweight web application designed to provide mental health support using prompt-only strategies powered by OpenAI's GPT models. This project avoids reliance on complex backend databases by embedding key knowledge into carefully crafted prompts, making it ideal for small-scale, low-resource deployments and academic experiments.

---


## How it works
- Single prompt input + LLM-based classification
- Routes query to appropriate backend logic
- Debug window shows internal LLM category decision

## Stack
- Frontend: HTML, JS
- Backend: Flask + OpenAI API


---

## Project Structure

mindguide/
├── index.html # Frontend UI
├── style.css # Page styling
├── script.js # Button actions and API calls
├── app.py # Flask backend with OpenAI API
├── .env # Stores your OpenAI API key
├── .gitignore # Hides .env and cache files
├── requirements.txt # Python dependencies
└── README.md # This file


---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mindguide.git
cd mindguide


python -m venv venv
source venv/bin/activate      # On macOS/Linux
venv\Scripts\activate         # On Windows


pip install -r requirements.txt


Customizing Prompts  
In index.html, button prompts are hardcoded using:
<button onclick="usePreset(`Your custom prompt here`)">Button Label</button>
