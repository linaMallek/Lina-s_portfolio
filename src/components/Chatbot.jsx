import React, { useState } from 'react';
import { chatbotData } from '../constants/chatbotData'; // Adjust the import path as necessary

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Bonjour ! Je suis votre assistant virtuel. Posez-moi une question, et je ferai de mon mieux pour vous aider !" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return; // Prevent sending empty messages
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
        <div className="chatbot-container max-w-lg mx-auto p-4 shadow-lg rounded-lg bg-gray-50">
            <div className="chatbot-messages h-64 overflow-y-auto border border-gray-300 p-3 mb-3 rounded-lg bg-white">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 text-${msg.sender === "user" ? "right" : "left"}`}
                    >
                        <span
                            className={`inline-block px-4 py-2 rounded-lg ${
                                msg.sender === "user"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <input
                className="chatbot-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Pose-moi une question !"
            />
        </div>
    );
};

export default Chatbot;
