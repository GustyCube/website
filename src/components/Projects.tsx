import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Globe, Code2, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Ignyte Solutions',
    description: 'Infrastructure-level networking software providing portable public IPv4 connectivity. Dedicated IPs that follow devices across networks using WireGuard-encrypted tunnels and DDoS-filtered edge ingress.',
    tags: ['Networking', 'Distributed Systems', 'WireGuard', 'Infrastructure'],
    link: 'https://ignyte.solutions',
    status: 'Active',
    icon: Globe
  },
  {
    title: 'EnsuraScript',
    description: 'A declarative programming language for defining and enforcing system guarantees. Built for DevOps automation and configuration management.',
    tags: ['Go', 'Programming Language', 'DevOps', 'CLI'],
    link: 'https://github.com/GustyCube/EnsuraScript',
    status: 'Open Source',
    icon: Code2
  },
  {
    title: 'ERR-EVAL',
    description: 'Benchmark for evaluating AI epistemic reliability—testing how well LLMs handle uncertainty, avoid hallucinations, and acknowledge what they don\'t know.',
    tags: ['Python', 'Machine Learning', 'AI', 'Benchmark'],
    link: 'https://github.com/GustyCube/ERR-EVAL',
    status: 'Open Source',
    icon: Brain
  }
];

export function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Simplified background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Current endeavors in <span className="text-primary">AI development</span>, <span className="text-purple-400">educational tools</span>, and <span className="text-muted-foreground">code innovation</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="h-full"
                >
                  <Card className="h-full relative overflow-hidden border bg-card/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative z-10 p-6">
                      <CardHeader className="pb-4 px-0">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            className="p-3 rounded-xl bg-muted text-muted-foreground"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-6 w-6" />
                          </motion.div>
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/30"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4 px-0">
                        <CardDescription className="text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div key={tagIndex}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs px-2 py-1 border-muted hover:bg-muted/50 transition-colors"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="outline"
                              className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                              asChild
                            >
                              <a href={project.link}>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Explore Project
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}