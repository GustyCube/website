import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Mail, Globe, Youtube, Sparkles, Code2, Brain } from 'lucide-react';
import { useEffect, useState } from 'react';

// Optimized Matrix-style code rain component
function CodeRain() {
  const [columns, setColumns] = useState<string[]>([]);
  
  useEffect(() => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789<>{}[];()';
    const newColumns = Array(30).fill(0).map(() => 
      Array(15).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
    );
    setColumns(newColumns);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {columns.map((column, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/40 text-xs font-mono"
          style={{ left: `${i * 3.33}%` }}
          animate={{
            y: ['-100%', '100vh'],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        >
          {column.split('').map((char, j) => (
            <div key={j} className="opacity-70">
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Simplified floating elements
function FloatingElements() {
  const elements = [
    { icon: Code2, delay: 0 },
    { icon: Brain, delay: 2 },
    { icon: Sparkles, delay: 4 },
  ];

  return (
    <>
      {elements.map(({ icon: Icon, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-muted-foreground/10"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: delay,
            ease: 'easeInOut',
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </>
  );
}

export function Hero() {
  const [typingText, setTypingText] = useState('');
  const phrases = [
    'Full Stack Developer',
    'AI Enthusiast', 
    'Problem Solver',
    'Open Source Contributor',
    'Philosophy Enthusiast',
    'Science Lover',
    'Ethics Advocate'
  ];
  
  useEffect(() => {
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const typeInterval = setInterval(() => {
      const phrase = phrases[currentPhrase];
      
      if (!isDeleting && currentChar < phrase.length) {
        setTypingText(phrase.substring(0, currentChar + 1));
        currentChar++;
      } else if (isDeleting && currentChar > 0) {
        setTypingText(phrase.substring(0, currentChar - 1));
        currentChar--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentPhrase = (currentPhrase + 1) % phrases.length;
        }
      }
    }, isDeleting ? 50 : 150);
    
    return () => clearInterval(typeInterval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <CodeRain />
      <FloatingElements />
      
      {/* Simplified animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-muted/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-primary/10 border border-primary/30 shadow-lg shadow-primary/20">
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for Remote Roles • United States 🇺🇸
            </Badge>
          </motion.div>

          {/* Main Title - Bennett Schwartz first */}
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl mb-4"
            >
              Bennett Schwartz
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-primary to-purple-400 bg-clip-text mb-4"
            >
              (aka GustyCube)
            </motion.h2>
            <motion.div
              className="text-xl md:text-2xl text-muted-foreground h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {typingText}<motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >|</motion.span>
            </motion.div>
          </motion.div>

          {/* Animated subtitle with interests */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 space-y-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              Building the future through <span className="text-primary">code</span> and exploring <span className="text-purple-400">big ideas</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Coding', 'Ethics', 'Philosophy', 'Science', 'Democracy', 'Capitalism'].map((interest, i) => (
                <motion.span
                  key={interest}
                  className="px-3 py-1 bg-muted/30 rounded-full border border-muted/30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button
                size="lg"
                className="text-xl px-10 py-8 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/30"
                asChild
              >
                <a href="mailto:gc@gustycube.xyz">
                  <Mail className="mr-3 h-6 w-6" />
                  Let's Collaborate
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                z: 20
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-10 py-8 border-2 border-primary/50 hover:bg-primary/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com/gustycube" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-6 w-6" />
                  View My Work
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links - simple icons without colors */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-8"
          >
            {[
              { icon: Globe, href: 'https://gustycube.com' },
              { icon: Github, href: 'https://github.com/gustycube' },
              { icon: Youtube, href: 'https://youtube.com/@gustycube' },
              { icon: Mail, href: 'mailto:gc@gustycube.xyz' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted/20 hover:bg-muted/40 transition-colors"
                whileHover={{ 
                  scale: 1.2,
                  y: -10
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Icon className="h-6 w-6 text-muted-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center bg-primary/10 backdrop-blur-sm">
          <motion.div 
            className="w-2 h-4 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}