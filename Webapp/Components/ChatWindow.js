// src/components/ChatWindow.js
import React, { useState } from 'react';

const ChatWindow = ({ messages }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    // Logic to send message
  };

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg}
        </div>
      ))}
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatWindow;
