import { motion } from 'motion/react';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-muted/40 to-transparent relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Separator className="mb-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 <span className="text-primary">GustyCube</span> (Bennett Schwartz). Available for remote roles.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="#minecraft-portfolio"
              className="text-muted-foreground hover:text-green-400 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Minecraft Portfolio</span>
              <motion.div
                className="absolute inset-0 bg-green-400/10 rounded-md blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Additional Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-primary/20 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-red-400">♥</span> using React, TypeScript, Tailwind CSS, and Motion. 
            <span className="text-primary"> Powered by curiosity.</span>
          </p>
          <motion.div
            className="mt-4 flex justify-center gap-2 text-xs text-muted-foreground/70"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span>🚀</span>
            <span>Always building, always learning, always improving</span>
            <span>🌟</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}