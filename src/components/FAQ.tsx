'use client';

import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What are business consulting services in India?',
    answer: 'Business consulting services in India include tax advisory, regulatory compliance, transfer pricing, and corporate advisory for companies operating or entering India.',
  },
  {
    question: 'What is FEMA compliance in India?',
    answer: 'FEMA compliance in India refers to adherence to foreign exchange regulations governed by RBI for cross-border transactions.',
  },
  {
    question: 'Why is transfer pricing important in India?',
    answer: 'Transfer pricing ensures intercompany transactions follow arm\'s length standards and comply with Indian tax regulations.',
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2FA4A9] text-xs font-bold tracking-[0.2em] uppercase">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c3359] mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-[#2FA4A9] mx-auto"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm p-8 border border-gray-100 border-l-4 border-l-transparent hover:border-l-[#2FA4A9] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-[#F57C00] font-bold text-xl pt-0.5">
                  0{index + 1}.
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1c3359] mb-4">
                    {faq.question}
                  </h3>
                  <div className="border-l-2 border-gray-200 pl-5 py-0.5">
                    <p className="text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
