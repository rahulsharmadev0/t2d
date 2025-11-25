import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What sets T2D apart from other software development companies?',
    answer: 'T2D (Think Design Develop) stands out through our AI-powered development approach, which enables us to deliver projects 3x faster without compromising quality. We combine strategic thinking, cutting-edge design, and expert development with a client-first mindset. Our team brings 10+ years of experience, a proven track record of 50+ successful projects, and a 98% client satisfaction rate. We don\'t just code—we partner with you to create solutions that drive real business results.',
  },
  {
    question: 'How can I request a quote for my project?',
    answer: 'Getting a quote is simple! Click the "Get Started" or "Start Your Project" button on our website to fill out a brief project form. Alternatively, you can reach out directly through our contact form or schedule a free consultation call. We\'ll discuss your project requirements, timeline, and budget, then provide you with a detailed proposal within 24-48 hours. We believe in transparent pricing and clear communication from day one.',
  },
  {
    question: 'Does T2D provide ongoing support after project completion?',
    answer: 'Absolutely! We offer comprehensive post-launch support and maintenance packages to ensure your product continues to perform optimally. Our support services include bug fixes, security updates, performance optimization, feature enhancements, and technical assistance. We provide flexible support plans tailored to your needs—from basic maintenance to full-scale ongoing development partnerships. Your success doesn\'t end at launch; we\'re here for the long haul.',
  },
  {
    question: 'Can T2D handle large-scale enterprise projects?',
    answer: 'Yes! We have extensive experience delivering complex, large-scale enterprise solutions across various industries. Our team is equipped to handle projects of any size, from MVPs for startups to comprehensive enterprise platforms. We follow industry-best practices, use scalable architectures, and maintain rigorous quality standards. Our AI-enhanced workflow allows us to efficiently manage large projects while maintaining the agility and personal attention that sets us apart.',
  },
  {
    question: 'What industries does T2D serve?',
    answer: 'We serve a diverse range of industries including hospitality (SipSkip), sports and fitness (Coach Frank), photography and creative services (InstantEdit AI), e-commerce (Voursa), healthcare, fintech, education, real estate, and more. Our versatile team has the expertise to understand unique industry challenges and regulations. Whether you\'re a startup disrupting an industry or an established business modernizing your digital presence, we have the skills and experience to deliver exceptional results.',
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-600 dark:text-blue-400 mb-4"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6"
          >
            Got Questions? We've Got Answers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Everything you need to know about working with T2D
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-6 text-left focus:outline-none group"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <h3 className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    className={`text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                      openIndex === index ? 'text-blue-600 dark:text-blue-400' : ''
                    }`} 
                    size={24} 
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-[52px]">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl text-gray-900 dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help. Get in touch with our team for personalized answers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-600/30 transition-shadow"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}