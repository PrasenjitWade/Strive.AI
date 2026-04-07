import React, { useState } from 'react';
import { ArrowRight, X, GraduationCap, Briefcase, School, Microscope, Calculator, Landmark, Palette, Sparkles } from 'lucide-react';
import { CAREER_OPTIONS, CareerOption } from '@/src/constants';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const CATEGORY_ICONS: Record<string, any> = {
  'sci-pcm-10': Calculator,
  'sci-pcb-10': Microscope,
  'comm-10': Landmark,
  'arts-10': Palette,
  'eng-12': Calculator,
  'med-12': Microscope,
  'ca-12': Landmark,
  'upsc-coll': Briefcase,
  'ent-coll': Sparkles,
  'diploma-10': School
};

export default function CareerGuidance() {
  const [selectedCategory, setSelectedCategory] = useState<CareerOption['category']>('10th');
  const [selectedCareer, setSelectedCareer] = useState<CareerOption | null>(null);

  const filteredOptions = CAREER_OPTIONS.filter(opt => opt.category === selectedCategory);

  return (
    <div className="space-y-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="badge-pill mx-auto text-brand-primary">FEATURE 02</div>
        <h2 className="text-6xl font-bold text-white">
          Career <span className="gradient-text-green">Guidance</span>
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Navigate your academic journey with expert-curated roadmaps. From 10th grade to professional college options, we've got you covered.
        </p>
      </div>

      <div className="space-y-12">
        <div className="flex justify-center gap-4">
          {(['10th', '12th', 'College'] as CareerOption['category'][]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedCareer(null);
              }}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all border",
                selectedCategory === cat
                  ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                  : "bg-white/[0.03] text-gray-500 border-white/[0.08] hover:text-white hover:border-white/20"
              )}
            >
              {cat === '10th' ? 'After 10th' : cat === '12th' ? 'After 12th' : 'After College'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOptions.map((option, i) => {
            const Icon = CATEGORY_ICONS[option.id] || GraduationCap;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedCareer(option)}
                className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] hover:border-brand-primary/30 transition-all cursor-pointer space-y-6"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-brand-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{option.description}</p>
                </div>
                <div className="flex items-center gap-2 text-brand-primary text-sm font-bold group-hover:gap-3 transition-all">
                  <span>View Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedCareer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCareer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-4xl bg-[#0a0a0a] rounded-[3rem] border border-white/[0.05] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-10 border-b border-white/[0.05] flex justify-between items-start bg-white/[0.02]">
                <div className="space-y-4">
                  <div className="badge-pill text-brand-primary w-fit">{selectedCareer.category === '10th' ? 'After 10th' : selectedCareer.category === '12th' ? 'After 12th' : 'After College'}</div>
                  <h3 className="text-4xl font-bold text-white">{selectedCareer.title} Roadmap</h3>
                </div>
                <button
                  onClick={() => setSelectedCareer(null)}
                  className="p-3 hover:bg-white/5 rounded-2xl transition-colors text-gray-500 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-10 max-h-[60vh] overflow-y-auto no-scrollbar">
                <div className="space-y-12 relative">
                  <div className="absolute left-8 top-4 bottom-4 w-px bg-white/[0.05]" />
                  {selectedCareer.roadmap.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-20"
                    >
                      <div className="absolute left-0 w-16 h-16 bg-[#0a0a0a] border border-white/[0.08] rounded-2xl flex items-center justify-center z-10 group">
                        <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary font-bold">
                          {i + 1}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        <p className="text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
