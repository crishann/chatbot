import { useState } from "react";
import { askFlowise } from "../api/flowise";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([
    {
      role: "bot",
      text: "Hi! I’m Cristian’s AI assistant. Ask me about projects or tech stack."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      const response = await askFlowise({ question: userMessage });

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            response.answer ||
            response.text ||
            "I couldn’t generate a response."
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chatbot" className="chatbot-section">
      <div className="container chatbot-card">
        <h2 className="section-title">Ask Me Anything 🤖</h2>

        <div className="chat-window">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chat-message ${m.role}`}
            >
              {m.text}
            </div>
          ))}

          {loading && (
            <div className="chat-message bot">Thinking…</div>
          )}
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects…"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </section>
  );
}
