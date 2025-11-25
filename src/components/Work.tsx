import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'SipSkip: Get drinks faster',
    description: 'SipSkip is a fast-growing mobile app that helps bar-goers get their drinks faster by skipping lines through a simple paid pass. This case study shows how a strong partnership between the SipSkip founder and our product team turned an early-stage idea into a market-ready product with real revenue, user growth, and funding success.',
    image: 'https://framerusercontent.com/images/2Rsr43lNXtc95ankCC9vDnrTuw.jpeg?scale-down-to=1024',
    tags: ['Mobile App', 'React Native', 'Product Design'],
  },
  {
    title: 'Coach Frank: Soccer session plans with AI',
    description: 'Using 10+ years of expert soccer coaching material, Coach Frank combines speed, AI, and real results to deliver fast, personalized training sessions—moving beyond generic prompts to give coaches the help they actually need.',
    image: 'https://framerusercontent.com/images/0dbtwdQMojhobrovH1hdMgqc1kg.jpeg?scale-down-to=1024',
    tags: ['AI', 'Web App', 'SaaS'],
  },
  {
    title: 'InstantEdit AI: Automating Wedding Photo Edits',
    description: 'How we helped a wedding photography business turn a time-consuming photo editing process into a fast, automated, and scalable SaaS product using AI—saving hours and creating new revenue.',
    image: 'https://framerusercontent.com/images/JZ4MIMHILLaJaZrzzLs4y3PaBZM.png?scale-down-to=1024',
    tags: ['AI', 'Automation', 'SaaS'],
  },
  {
    title: 'Voursa: A New Marketplace Experience for Mauritania',
    description: 'How a decade-old local leader in e-commerce transformed its outdated platform into a modern, user-focused experience while preserving the unique habits of its loyal customer base in a culturally specific market.',
    image: 'https://framerusercontent.com/images/QagCtMQ223S8Qa07CttAcFxsLok.png',
    tags: ['E-commerce', 'Web App', 'UI/UX'],
  },
];

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-600 dark:text-blue-400 mb-4"
          >
            OUR WORK
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6"
          >
            Success Stories
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Real projects, real results. See how we've helped businesses transform their ideas into successful digital products.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent z-10 flex items-end p-8"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="text-white"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span>View Case Study</span>
                        <ArrowUpRight size={20} />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Image */}
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Decorative Element */}
                <motion.div
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-400 to-purple-400' : 
                    index % 3 === 1 ? 'from-purple-400 to-pink-400' : 
                    'from-orange-400 to-red-400'
                  } blur-2xl opacity-20 top-8 left-8`}
                />
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group"
                  >
                    Read Full Case Study
                    <ArrowUpRight 
                      size={20} 
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl sm:text-4xl mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-shadow"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}