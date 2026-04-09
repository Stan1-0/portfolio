'use client';
import { motion } from 'framer-motion';
import grainImage from '@/assets/images/grain.jpg';

export const MorphBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gray-950 pointer-events-none">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.gray.900),theme(colors.gray.950))]" />
      
      {/* Emerald morphing orb */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
          x: ['0%', '8%', '-4%', '0%'],
          y: ['0%', '-8%', '4%', '0%']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[120px]" 
      />

      {/* Sky morphing orb */}
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          x: ['0%', '-10%', '10%', '0%'],
          y: ['0%', '10%', '-10%', '0%']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[40%] -right-[10%] w-[50%] h-[60%] rounded-full bg-sky-500/20 blur-[120px]" 
      />
      
      {/* Teal bottom orb */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: ['0%', '5%', '-5%', '0%'],
          y: ['0%', '-5%', '5%', '0%']
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-teal-400/20 blur-[120px]" 
      />

      {/* Unified grain texture over everything */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: `url(${grainImage.src})` }} 
      />
    </div>
  );
};
