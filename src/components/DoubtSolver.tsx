import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const SYSTEM_INSTRUCTION = "You are Strive.AI, a helpful student companion for Indian students. Answer academic doubts clearly. Respond in English by default. However, if the user asks a question in Hindi, you must respond in Hindi. Be encouraging and concise. Use simple language. Focus on competitive exams like JEE/NEET. If the board is Maharashtra State Board, focus on its specific curriculum.";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function DoubtSolver() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Namaste! I'm **Strive.AI**, your personal study buddy. 🚀\n\nI can help you solve complex math problems, explain scientific concepts, or even help you plan your career. Ask me anything in **Hindi** or **English**!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('NCERT');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    if (!process.env.GEMINI_API_KEY) {
      setMessages(prev => [...prev, { role: 'assistant', content: "⚠️ **API Key Missing!**\n\nPlease add `VITE_GEMINI_API_KEY` to your environment variables to enable the AI solver." }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `[Current Syllabus: ${selectedBoard}] ${userMessage}`,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION
        }
      });
      const aiResponse = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "❌ **Connection Error**\n\nI'm having trouble reaching my brain. Please check your internet or API key configuration." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12">
      <div className="atmosphere-bg" />
      
      <div className="space-y-12 order-2 lg:order-1">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-black tracking-[0.2em] uppercase text-brand-primary">
              Feature 01
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-primary/30 to-transparent" />
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white">
            AI Doubt <br />
            <span className="gradient-text-purple">Solver</span>
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-light">
            Don't just get answers. Get <span className="text-white font-medium">clarity</span>. Our AI breaks down complex concepts from NCERT & State Boards into simple, bite-sized explanations.
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Quick Actions</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'math', label: 'Solve Math Problem', icon: 'Σ' },
              { id: 'notes', label: 'Summarize Chapter', icon: '📝' },
              { id: 'tips', label: 'JEE/NEET Strategy', icon: '🎯' },
              { id: 'career', label: 'Career Roadmap', icon: '🗺️' }
            ].map((action) => (
              <button
                key={action.id}
                onClick={() => handleSend(action.label)}
                className="group flex items-center justify-between p-4 rounded-2xl glass hover:border-brand-secondary/30 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-lg">{action.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{action.label}</span>
                </div>
                <Send className="w-4 h-4 text-gray-600 group-hover:text-brand-secondary transition-all transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/[0.02] border border-white/[0.05] w-fit">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg bg-gray-800 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium">
              <span className="text-white font-bold">1,200+</span> students asked doubts today
            </p>
          </div>
        </div>
      </div>

      <div className="relative order-1 lg:order-2">
        <div className="absolute -inset-20 bg-brand-secondary/10 blur-[120px] rounded-full animate-pulse-slow" />
        
        <div className="flex flex-col h-[650px] w-full glass rounded-[3rem] overflow-hidden relative z-10">
          {/* Header */}
          <div className="px-8 py-6 border-b border-white/[0.05] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-secondary/20">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-dark-bg rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-white tracking-tight">Strive Study Buddy</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Online • AI Active</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <select 
                value={selectedBoard} 
                onChange={(e) => setSelectedBoard(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[10px] font-bold text-gray-400 focus:outline-none focus:border-brand-primary/50 cursor-pointer"
              >
                <option value="NCERT">NCERT</option>
                <option value="MSB">Maharashtra Board</option>
                <option value="JEE">JEE/NEET</option>
              </select>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar scroll-smooth">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex gap-4 max-w-[90%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
                    msg.role === 'user' ? "bg-gradient-to-br from-brand-primary to-emerald-600" : "bg-white/10"
                  )}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Sparkles className="w-5 h-5 text-brand-secondary" />}
                  </div>
                  <div className={cn(
                    "p-5 rounded-3xl text-sm leading-relaxed relative",
                    msg.role === 'user' 
                      ? "bg-brand-primary/10 text-white border border-brand-primary/20 rounded-tr-none" 
                      : "bg-white/[0.03] text-gray-300 border border-white/[0.05] rounded-tl-none"
                  )}>
                    <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-strong:text-brand-secondary prose-code:bg-white/5 prose-code:p-1 prose-code:rounded">
                      <ReactMarkdown>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 mr-auto items-center"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center animate-pulse">
                  <Bot className="w-5 h-5 text-brand-secondary" />
                </div>
                <div className="bg-white/[0.03] px-6 py-4 rounded-3xl border border-white/[0.05]">
                  <div className="flex gap-1.5">
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="px-8 py-8 bg-white/[0.02] border-t border-white/[0.05]">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative flex items-center group"
            >
              <div className="absolute inset-0 bg-brand-secondary/20 blur-2xl rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your study buddy anything..."
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-[1.5rem] py-5 pl-8 pr-16 focus:outline-none focus:border-brand-secondary/40 focus:ring-4 focus:ring-brand-secondary/10 transition-all text-sm text-white placeholder:text-gray-500 relative z-10"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-3 p-3 bg-brand-secondary text-white rounded-2xl disabled:opacity-30 disabled:grayscale hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-secondary/20 z-10"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
            <p className="text-[10px] text-center text-gray-600 mt-4 uppercase tracking-widest font-bold">
              Powered by Google Gemini 2.0 Flash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

