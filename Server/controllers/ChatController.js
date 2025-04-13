const axios = require('axios')

const ChatWithGroq = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [{
          role: 'user',
          content: userMessage
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    const output = response.data.choices[0].message.content;
    res.json(output);
  }

  catch (error) {
    console.error('Error from Groq API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch response from Groq API' });
  }

}

module.exports = {
  ChatWithGroq
}