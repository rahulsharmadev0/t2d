import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ethan Karian',
    role: 'Founder and CEO',
    company: 'SipSkip',
    website: 'sipskip.com',
    content: 'Boris and the T2D team helped Ethan, a first-time app founder, develop SipSkip, a fully functioning app. Ethan praises their ability to deliver on features and changes, contrasting them with a previous disappointing experience.',
    rating: 5,
  },
  {
    name: 'Sebastian Salmhofer',
    role: 'Founder',
    company: 'Krationis',
    website: 'krationis.com',
    content: 'T2D provided a skilled and fast development team to a company lacking in-house expertise. Their proactive design choices and business acumen were highly recommended.',
    rating: 5,
  },
  {
    name: 'Madison Schumann',
    role: 'Founder',
    company: 'The Mother Network',
    website: 'themothernetwork.com',
    content: 'T2D is the best development partner, offering strategic thinking, problem-solving, and outstanding work quality. They are trusted, communicate seamlessly, and deliver fast.',
    rating: 5,
  },
];

export function Reviews() {
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
            CLIENT REVIEWS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6"
          >
            Trusted by Founders & Teams
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
              >
                <Quote className="text-white" size={24} />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="text-gray-900 dark:text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                  {testimonial.role} at {testimonial.company}
                </div>
                <a
                  href={`https://${testimonial.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  {testimonial.website}
                </a>
              </div>

              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                index % 3 === 0 ? 'from-blue-200/50 dark:from-blue-500/10 to-transparent' :
                index % 3 === 1 ? 'from-purple-200/50 dark:from-purple-500/10 to-transparent' :
                'from-pink-200/50 dark:from-pink-500/10 to-transparent'
              } rounded-full blur-3xl -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '100%', label: 'Project Success' },
              { value: '50+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}