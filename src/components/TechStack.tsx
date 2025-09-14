import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { useState } from 'react';

const techStack = {
  'Frontend': [
    'JavaScript', 'TypeScript', 'HTML/CSS', 'React', 'Svelte', 'Next.js', 'Tailwind'
  ],
  'Backend': [
    'Node.js', 'Express', 'Python', 'Go', 'PHP', 'Lua'
  ],
  'Languages': [
    'Java', 'Swift', 'Bash', 'PowerShell'
  ],
  'Databases': [
    'MongoDB', 'MySQL', 'Prisma'
  ],
  'AI & ML': [
    'TensorFlow', 'PyTorch'
  ],
  'Cloud & DevOps': [
    'Docker', 'NGINX', 'Vercel', 'Netlify', 'Cloudflare', 'Firebase', 'GCP'
  ],
  'Game Development': [
    'Godot', 'Unity', 'Roblox Studio'
  ],
  'Tools': [
    'Git', 'GitHub', 'GitLab', 'VS Code', 'WebStorm', 'PyCharm', 'Postman', 'Discord.js'
  ],
  'Hardware': [
    'Arduino', 'Raspberry Pi', 'Linux', 'Windows'
  ]
};

// Simplified tech badge component
function TechBadge({ tech, delay }: { tech: string, delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateX: -90 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        rotateX: 0,
        transition: {
          duration: 0.4,
          delay: delay * 0.02,
          type: "spring",
          stiffness: 120
        }
      }}
      whileHover={{ 
        scale: 1.1,
        z: 20,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
      className="relative cursor-pointer"
    >
      <Badge
        variant="outline"
        className={`px-3 py-2 text-sm border-2 transition-all duration-300 backdrop-blur-sm
          ${isHovered 
            ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
            : 'bg-card/80 border-muted hover:border-primary/60'
          }`}
      >
        {tech}
      </Badge>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-muted/10 via-background to-muted/5 relative overflow-hidden">
      {/* Simplified grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
             }} 
        />
      </div>

      {/* Simplified floating tech symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {['{}', '</>', '()'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-muted-foreground/5 font-mono"
            style={{
              left: `${15 + i * 30}%`,
              top: `${25 + (i % 2) * 30}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Tech Arsenal
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning <span className="text-primary">multiple domains</span> and <span className="text-purple-400">cutting-edge technologies</span>.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.05 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category header */}
              <div className="text-center mb-6">
                <motion.h3 
                  className="text-xl md:text-2xl mb-3 inline-block relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {category}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.h3>
              </div>

              {/* Tech grid */}
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <TechBadge 
                    key={tech}
                    tech={tech}
                    delay={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground italic">
            *I probably forgot something... always learning! <span className="text-purple-400">🚀</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}