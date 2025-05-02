import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { chatbotData } from '../constants/chatbotData';
import { fadeIn } from '../utils/motion';
import parse from 'html-react-parser';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! I'm Lina's career assistant. How can I help you today? 😊" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        const userMessage = { sender: "user", text: input };
        const response = getBotResponse(input);
        const botMessage = { sender: "bot", text: response };
        
        setMessages(prev => [...prev, userMessage, botMessage]);
        setInput("");
        
        // Force reflow pour le scroll
        requestAnimationFrame(() => {
            scrollToBottom();
        });
    };

    const getBotResponse = (input) => {
        const normalized = input.toLowerCase();
        const entry = chatbotData.find(entry => 
            entry.keywords.some(keyword => normalized.includes(keyword))
        );
        return entry ? entry.answer : "I'm sorry, I didn't understand that. Could you rephrase your question?";
    };

    return (
        <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="w-full max-w-3xl mx-auto mt-12 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-tertiary rounded-[20px] p-5 h-[550px] flex flex-col">
                <div 
                    ref={messagesContainerRef}
                    className="chatbot-messages h-[450px] overflow-y-auto mb-4 pr-2"
                >
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] p-3 rounded-2xl text-[15px] ${
                                    msg.sender === "user"
                                        ? "bg-gradient-to-br from-blue-500 to-cyan-400"
                                        : "bg-gradient-to-br from-purple-600 to-indigo-500"
                                }`}
                            >
                                <div className={msg.sender === "user" ? "text-white" : "text-gray-100"}>
                                    {parse(msg.text.replace(
                                        /\[(.*?)\]\((.*?)\)/g,
                                        '<a href="$2" target="_blank" rel="noopener" class="underline hover:opacity-80 transition-opacity" style="color: inherit;">$1</a>'
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSend} className="relative mt-auto">
                    <input
                        className="w-full bg-[#151030] text-gray-100 rounded-xl py-3 px-4 pr-12 border-none text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything!"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Chatbot;