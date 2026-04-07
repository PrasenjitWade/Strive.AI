import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function DoubtSolver() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Namaste! I am your Strive.AI companion. Ask me any doubt in Hindi or English, and I\'ll help you solve it instantly.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('NCERT');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `[Current Syllabus: ${selectedBoard}] ${userMessage}`,
        config: {
          systemInstruction: `You are Strive.AI, a helpful student companion for Indian students. Answer academic doubts clearly. Respond in English by default. However, if the user asks a question in Hindi, you must respond in Hindi. Be encouraging and concise. Use simple language. Focus on ${selectedBoard} and competitive exams like JEE/NEET. If the board is Maharashtra State Board, focus on its specific curriculum.`,
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having some trouble connecting. Please check your internet or try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="badge-pill w-fit text-[#6366f1]">FEATURE 01</div>
          <h2 className="text-7xl font-bold leading-tight text-white">
            AI Doubt <span className="gradient-text-purple">Solver</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Stuck on a problem? Our AI understands NCERT, Maharashtra State Board, JEE, NEET, and more. Ask in Hindi or English and get step-by-step explanations instantly.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Select Syllabus</div>
          <div className="flex flex-wrap gap-3">
            {['NCERT', 'Maharashtra State Board', 'JEE/NEET'].map((board) => (
              <button
                key={board}
                onClick={() => setSelectedBoard(board)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold transition-all border",
                  selectedBoard === board
                    ? "bg-[#6366f1] text-white border-[#6366f1] shadow-lg shadow-[#6366f1]/20"
                    : "bg-white/[0.03] text-gray-500 border-white/[0.08] hover:text-white hover:border-white/20"
                )}
              >
                {board}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Quick Suggestions</div>
          <div className="flex flex-wrap gap-3">
            {['Newton\'s Law', 'Water Cycle', 'JEE Tips', 'Photosynthesis', 'Trigonometry'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSend(suggestion)}
              className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all"
            >
              {suggestion}
            </button>
          ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-10 bg-[#6366f1]/5 blur-[100px] rounded-full -z-10" />
        <div className="flex flex-col h-[600px] w-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-2xl">
          <div className="p-6 border-b border-white/[0.05] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#6366f1]/10 rounded-2xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#6366f1]" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Doubt Solver</h3>
                <p className="text-[10px] text-orange-500/80 font-bold tracking-widest uppercase">Hindi & English Support</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-4 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-orange-500" : "bg-[#6366f1]/10"
                  )}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-[#6366f1]" />}
                  </div>
                  <div className={cn(
                    "p-5 rounded-3xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-orange-900/20 text-white border border-orange-500/20" 
                      : "bg-white/[0.03] text-gray-300 border border-white/[0.05]"
                  )}>
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex gap-4 mr-auto">
                <div className="w-10 h-10 rounded-2xl bg-[#6366f1]/10 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 text-[#6366f1] animate-spin" />
                </div>
                <div className="bg-white/[0.02] p-5 rounded-3xl border border-white/[0.03]">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#6366f1]/50 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#6366f1]/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-[#6366f1]/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white/[0.02] border-t border-white/[0.05]">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your doubt here..."
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-[#6366f1]/30 transition-all text-sm text-white placeholder:text-gray-600"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-3 p-2.5 text-[#6366f1] hover:bg-[#6366f1]/10 rounded-xl disabled:opacity-30 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

