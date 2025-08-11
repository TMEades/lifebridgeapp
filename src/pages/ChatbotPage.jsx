import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Bot, Send, ArrowDown, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your empathetic wellness assistant. How are you feeling today? I'm here to listen, offer support, or help you find a coping skill. What's on your mind?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for sharing. This is a safe space. Remember, I'm an AI assistant and not a substitute for professional help. How about we try a simple breathing exercise to ground ourselves?",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };
  
  const quickReplies = [
    "I'm feeling stressed.",
    "Tell me a coping skill.",
    "I just want to talk.",
    "I need help with my career."
  ]

  const handleQuickReply = (reply) => {
    const userMessage = {
      id: Date.now(),
      text: reply,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "I hear you. It's completely valid to feel that way. Many people experience similar feelings during midlife transitions. Let's explore this together.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  }

  return (
    <>
      <Helmet>
        <title>AI Wellness Chatbot - MidLife Wellness</title>
        <meta name="description" content="Engage with our 24/7 AI-powered chatbot for empathetic support, coping skills, and a listening ear." />
      </Helmet>

      <div className="flex flex-col h-full bg-slate-50">
        <header className="px-4 py-4 profile-gradient border-b">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex items-center gap-3"
          >
            <Bot className="w-8 h-8 text-indigo-800" />
            <div>
              <h1 className="text-2xl font-bold text-indigo-900">AI Wellness Chatbot</h1>
              <p className="text-indigo-800 text-sm">Your 24/7 empathetic companion</p>
            </div>
          </motion.div>
        </header>

        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        'flex items-end gap-3',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.sender === 'bot' && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <Bot className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          'max-w-md p-3 rounded-2xl text-white',
                          message.sender === 'user'
                            ? 'bg-primary rounded-br-lg'
                            : 'bg-gradient-to-r from-indigo-500 to-purple-500 rounded-bl-lg'
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-end gap-3 justify-start"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="p-3 rounded-2xl bg-muted rounded-bl-lg">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></span>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </main>

          <footer className="p-4 bg-slate-50/80 backdrop-blur-sm border-t">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2 mb-2 overflow-x-auto scrollbar-hide">
                {quickReplies.map(reply => (
                  <Button key={reply} variant="outline" size="sm" onClick={() => handleQuickReply(reply)} className="whitespace-nowrap flex-shrink-0">
                    <Sparkles className="w-3 h-3 mr-2" />
                    {reply}
                  </Button>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white"
                  autoComplete="off"
                />
                <Button type="submit" size="icon" disabled={isTyping}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
               <p className="text-xs text-muted-foreground text-center mt-2 px-2">
                Disclaimer: This is an AI assistant and not a substitute for professional help. For crisis support, please refer to our dedicated resources.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ChatbotPage;