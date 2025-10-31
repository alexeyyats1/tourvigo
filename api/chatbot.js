// api/chatbot.js - Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body;

    // Здесь интеграция с вашим AI провайдером (OpenAI, Yandex GPT и т.д.)
    const response = await fetch("https://functions.yandexcloud.net/d4e3fempk5bopa9943rp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history })
    });

    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Chatbot API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
