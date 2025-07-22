import React, { useState } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hey there, I’m XBOT an AI companion. How can I help today?',
    },
    {
      sender: 'user',
      text: 'What product do you recommend for...',
    }
  ]);

  const toggleWidget = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');

    // Simulated bot reply (you can replace this with actual AI call later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: "Thanks for your question! I'm thinking...",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button onClick={toggleWidget} className="chat-toggle-btn" aria-label="Toggle Chat">
        <img
          src={isOpen ? "/DownArrow.png" : "/ChatBubble.png"}
          alt="Toggle Chat"
          style={{ width: '24px', height: '24px' }}
        />
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="chat-widget">

          {/* Header */}
          <div className="chat-header">
            <div className="title">
              <img src="/X.png" alt="XBOT" />
              Xvantage Digital Assistant
            </div>
            <button onClick={toggleWidget}>×</button>
          </div>

          {/* Chat Body */}
          <div className="chat-body">
            {messages.map((msg, index) =>
              msg.sender === 'bot' ? (
                <div key={index} className="chat-message-wrapper bot">
                  <div className="chat-meta">
                    <img src="/avatar.png" alt="XBOT" className="chat-avatar-large" />
                    <span className="chat-username">XBOT</span>
                  </div>
                  <div className="chat-message bot">{msg.text}</div>
                </div>
              ) : (
                <div key={index} className="chat-message user">{msg.text}</div>
              )
            )}
          </div>

          {/* Input */}
          <div className="chat-input-wrapper">
            <div className="chat-input-row">
              {/* Plus icon on left */}
              <div className="chat-plus">
                <button title="Add file">
                  <img src="/plus-icon.png" alt="Add file" />
                </button>
              </div>

              {/* Input field in center */}
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                />
              </div>

              {/* Mic + Send on right */}
              <div className="chat-actions">
                <button title="Voice input">
                  <img src="/mic.png" alt="Mic" />
                </button>
                <button title="Send" onClick={handleSend}>
                  <img src="/send-icon.png" alt="Send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
