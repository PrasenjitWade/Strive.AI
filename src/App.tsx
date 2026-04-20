/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, GraduationCap, MessageSquare, ArrowRight, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import DoubtSolver from './components/DoubtSolver';
import CareerGuidance from './components/CareerGuidance';
import { cn } from './lib/utils';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/[0.05] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-white">Strive<span className="text-brand-primary">.AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
            <a 
              href="#doubt-solver"
              className="px-5 py-1.5 rounded-full border border-brand-primary/30 text-brand-primary text-xs font-bold hover:bg-brand-primary/10 transition-all"
            >
              Ask AI
            </a>
          </div>

          <a 
            href="#doubt-solver" 
            className="px-6 py-2.5 rounded-full bg-brand-primary text-white text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-primary/20"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#6366f1] text-xs font-medium tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Learning Companion</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-white"
            >
              Strive. Learn. <span className="gradient-text-purple">Achieve.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              The ultimate AI companion designed specifically for Indian students. Solve doubts instantly and navigate your career path with confidence.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a 
              href="https://forms.gle/zoxpENPUEBD5QYqh9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-brand-secondary to-purple-600 text-white font-black text-xl shadow-2xl shadow-brand-secondary/30 hover:scale-105 active:scale-95 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative flex items-center gap-2">
                Get My Personalized Career Plan <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#doubt-solver" 
              className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ask AI Doubt
            </a>
          </motion.div>
          </div>
        </section>

        {/* Doubt Solver Section */}
        <section id="doubt-solver" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <DoubtSolver />
          </div>
        </section>

        {/* Career Guidance Section */}
        <section id="career-guidance" className="py-32 px-6 bg-white/[0.01] relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <CareerGuidance />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-6xl font-bold text-white">About Strive.AI</h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  Strive.AI is built with a simple mission: to make quality education and guidance accessible to every Indian student. We combine the power of advanced AI with a deep understanding of the Indian education system to provide a truly personalized companion.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                  <h4 className="text-xl font-bold text-white">Our Vision</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">To bridge the gap between students and their dreams through technology.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                  <h4 className="text-xl font-bold text-white">Our Values</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Accessibility, Accuracy, and Student-First approach.</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-[3rem] bg-[#1e1b4b] overflow-hidden flex flex-col items-center justify-center text-center p-12">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-white tracking-tighter">Strive<span className="text-brand-primary">.AI</span></div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#6366f1] tracking-[0.3em] uppercase">Strive. Learn. Achieve.</div>
                  <div className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Student Companion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-white">100+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">Career Paths</div>
            </div>

            <div className="flex justify-center">
              <div className="px-8 py-4 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 text-center space-y-1">
                <div className="text-xl font-bold text-[#6366f1]">Launching Soon</div>
                <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Stay tuned for v1.0</div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">Availability</div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-secondary/5 -z-10" />
          <div className="max-w-4xl mx-auto rounded-[3rem] glass p-12 md:p-20 text-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Ready to Master Your <span className="gradient-text-purple">Future?</span></h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto font-light">Join thousands of students who are already using Strive.AI to excel in their studies.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#doubt-solver" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-fuchsia-100/10"
              >
                Launch Strive.AI
              </a>
              <a 
                href="https://forms.gle/HTKcepMYiCsutxDf7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 text-white font-bold text-xl hover:bg-white/5 transition-all"
              >
                Leave Feedback
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-brand-secondary" />
              <span>Available 24/7 for you</span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="footer" className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-white tracking-tighter">Strive<span className="text-brand-primary">.AI</span></div>
              <div className="text-xs font-bold text-[#6366f1] tracking-[0.2em] uppercase">Strive. Learn. Achieve.</div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering Indian students with AI-driven tools to excel in their academic and professional journeys.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08]" />
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08]" />
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#doubt-solver" className="hover:text-white transition-colors">Doubt Solver</a></li>
              <li><a href="#career-guidance" className="hover:text-white transition-colors">Career Roadmaps</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="https://forms.gle/HTKcepMYiCsutxDf7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-medium uppercase tracking-widest">
          <div>© 2026 Strive.AI. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href="https://forms.gle/HTKcepMYiCsutxDf7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="self-end px-5 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 font-bold text-xs flex items-center gap-2 hover:bg-white/10 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Feedback</span>
        </a>
      </div>
    </div>
  );
}
