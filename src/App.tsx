import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { Menu, X, Moon, Sun } from 'lucide-react';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-black dark:text-white"
            >
              T2D<span className="text-blue-600">.</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'services', 'work', 'reviews'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </motion.button>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun size={20} className="text-gray-300" />
                )}
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {['home', 'services', 'work', 'reviews'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize py-2"
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={20} />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun size={20} />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
              
              <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="work">
        <Work />
      </section>
      
      <section id="reviews">
        <Reviews />
      </section>

      <section id="faq">
        <FAQ />
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl mb-4">
                T2D<span className="text-blue-600">.</span>
              </div>
              <p className="text-gray-400">
                Think. Design. Develop. Building digital experiences that matter.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Testimonials</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4">Contact</h3>
              <p className="text-gray-400">
                Ready to start your project?
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
                Let's Talk
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Think Design Develop (T2D). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}