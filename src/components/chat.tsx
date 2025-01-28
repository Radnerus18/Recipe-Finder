import React,{useState} from 'react'
import '../AiChat.css'


const Chat = () => {
    interface Msg{
        text:String,
        isUser:boolean
    }
    const [messages,setMessages] = useState<Msg[]>([])
    const [input,setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, { text: input, isUser: true }]);
        setInput("");
    
        // Call your AI function here
        sendToAI(input);
      };
    
      const sendToAI = async (userInput) => {
        // Placeholder for actual AI call
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: userInput })
        });
        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.reply, isUser: false }
        ]);
      };
  return (
    <div className="ask-your-friend">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.isUser ? "user-message" : "ai-message"}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything!"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat