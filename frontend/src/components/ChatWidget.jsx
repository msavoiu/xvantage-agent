import React, { useState } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleWidget = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Chat Button */}
      <button onClick={toggleWidget} className="chat-toggle-btn" aria-label="Toggle Chat">
        💬
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="chat-widget">
          {/* Header */}
          <div className="chat-header">
            <div className="title">
              <img src="/chatbot-avatar.png" alt="XBOT" />
              Xvantage Digital Assistant
            </div>
            <button onClick={toggleWidget}>×</button>
          </div>

          {/* Chat Body */}
          <div className="chat-body">
            <div className="chat-message bot">
              <strong>XBOT:</strong> Hey there, I’m XBOT an AI companion. How can I help today?
            </div>
            <div className="chat-message user">
              What product do you recommend for...
            </div>
          </div>

          {/* Input */}
          <div className="chat-input">
            <button title="Add file">➕</button>
            <input type="text" placeholder="Enter your message..." />
            <button title="Voice input">🎤</button>
            <button title="Send">➤</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
