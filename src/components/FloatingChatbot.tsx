import { useState } from "react";
import { askFlowise } from "../api/flowise";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I’m Cristian’s AI assistant. Ask me about projects or tech stack."
    }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const question = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setLoading(true);

    try {
      const response = await askFlowise({ question });

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            response.answer ||
            response.text ||
            "Sorry, I couldn’t answer that."
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="chatbot-fab"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <span>Ask Cristian</span>
<button
  className="chatbot-close"
  onClick={() => setOpen(false)}
  aria-label="Close chat"
>
  ✕
</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chatbot-message ${m.role}`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="chatbot-message bot">Thinking…</div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects…"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
