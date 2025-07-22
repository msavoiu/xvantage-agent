import express from "express";
import ollama from "ollama";

const app = express();
// const router = express.Router();

app.use(express.json());

// QUERY AGENT
app.post("/query", async (req, res) => {
    const { query } = req.body;

    try {
        const response = await ollama.chat({
            model: "xvcb",
            messages: [{role: "user", content: query }]
        })

        res.json({ reply: response.message.content })

    } catch (error) {
        res.status(500).send({ error: "Error interacting with the chatbot model." })
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Chatbot query route hosted at 127.0.0.1:${PORT}.`);
});