'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimatedSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  className?: string;
  delay?: number;
  
}

export default function AnimatedSection({ children, className, delay = 0, ...rest }: AnimatedSectionProps) {
  return (
    <motion.section
      {...(rest as any)}
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
