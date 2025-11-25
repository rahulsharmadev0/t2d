import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Smartphone, Globe, Palette } from 'lucide-react';
import { Sparkles } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS, Android, and cross-platform apps built with React Native, Flutter, or Swift.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Responsive, fast, and feature-rich web applications that work seamlessly across all devices.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design with beautiful interfaces that enhance usability and engagement.',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-600 dark:text-blue-400 mb-4"
          >
            OUR SERVICES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6"
          >
            What We Do Best
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            We specialize in creating digital products that drive real business results and delight users.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 -m-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text cursor-pointer`}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Powered Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative">
            {/* Animated background pattern */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block mb-6"
              >
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Sparkles className="text-white" size={40} />
                </div>
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl mb-4">
                Powered by AI. Delivered Faster.
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                We leverage cutting-edge AI capabilities to enhance productivity, streamline development processes, and deliver your projects in record time — without compromising on quality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { label: 'Faster Development', value: '3x' },
                  { label: 'Code Efficiency', value: '95%' },
                  { label: 'Time Saved', value: '60%' },
                ].map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <div className="text-4xl mb-2">{metric.value}</div>
                    <div className="text-white/80">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Need something specific? We offer custom solutions tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-600/30 transition-shadow"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}