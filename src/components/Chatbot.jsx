import React, { useState } from 'react';
import { chatbotData } from '../constants/chatbotData'; // Adjust the import path as necessary

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const userMessage = { sender: "user", text: input };
    const response = getBotResponse(input);
    const botMessage = { sender: "bot", text: response };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotResponse = (input) => {
    const normalized = input.toLowerCase();
    for (let entry of chatbotData) {
      if (entry.keywords.some(keyword => normalized.includes(keyword))) {
        return entry.answer;
      }
    }
    return "Désolé, je n'ai pas compris. Essaie une autre question.";
  };

  return (
    <div className="max-w-lg mx-auto p-4 shadow rounded bg-white">
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-1 text-${msg.sender === "user" ? "right" : "left"}`}>
            <span className={`inline-block px-3 py-2 rounded ${msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        className="w-full border p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Pose-moi une question !"
      />
    </div>
  );
};

export default Chatbot;
