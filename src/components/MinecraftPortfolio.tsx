import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Gamepad2, Users, Code, Server, Zap } from 'lucide-react';

const minecraftProjects = [
  {
    title: 'Minecraft Plugin Development',
    description: 'Custom Java plugins for Minecraft servers, focusing on gameplay enhancement and server management tools.',
    icon: Code,
    gradient: 'from-green-400 to-emerald-500',
    features: ['Java Development', 'Bukkit/Spigot API', 'Database Integration', 'Custom Commands']
  },
  {
    title: 'Server Infrastructure',
    description: 'Scalable Minecraft server hosting solutions with automated deployment and management systems.',
    icon: Server,
    gradient: 'from-blue-400 to-cyan-500',
    features: ['Docker Containers', 'Load Balancing', 'Auto-scaling', 'Monitoring Systems']
  },
  {
    title: 'Game Mechanics Design',
    description: 'Creative gameplay systems and mechanics that enhance the vanilla Minecraft experience.',
    icon: Gamepad2,
    gradient: 'from-purple-400 to-pink-500',
    features: ['Custom Game Modes', 'Economy Systems', 'PvP Mechanics', 'Mini-games']
  },
  {
    title: 'Community Management',
    description: 'Tools and systems for managing large Minecraft communities and player engagement.',
    icon: Users,
    gradient: 'from-orange-400 to-red-500',
    features: ['Discord Integration', 'Player Statistics', 'Leaderboards', 'Event Management']
  }
];

export function MinecraftPortfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="relative">
        {/* Minecraft-themed background */}
        <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-background to-emerald-900/10 pointer-events-none" />
        
        {/* Pixelated background pattern */}
        <div className="fixed inset-0 opacity-5" 
             style={{
               backgroundImage: `
                 linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px),
                 linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px',
             }} 
        />

        <div className="relative z-10">
          {/* Header */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="mb-8 bg-background/80 backdrop-blur-sm"
                  asChild
                >
                  <a href="/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Main Portfolio
                  </a>
                </Button>

                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'] 
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundSize: '200%' }}
                >
                  Minecraft Portfolio
                </motion.h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Exploring the world of <span className="text-green-400">block-based development</span> and 
                  <span className="text-emerald-400"> server management</span> in the Minecraft ecosystem.
                </p>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {minecraftProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: 2,
                          z: 20
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl shadow-2xl group">
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-4 mb-4">
                              <motion.div
                                className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                              >
                                <Icon className="h-6 w-6" />
                              </motion.div>
                              <motion.div
                                className="p-2 rounded-lg bg-green-500/20"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  rotate: [0, 5, 0]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.3
                                }}
                              >
                                <Zap className="h-4 w-4 text-green-400" />
                              </motion.div>
                            </div>
                            <CardTitle className="text-2xl group-hover:text-green-400 transition-colors">
                              {project.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.features.map((feature, featureIndex) => (
                                <motion.div 
                                  key={featureIndex}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="text-xs px-2 py-1 border-green-400/30 hover:bg-green-400/10 transition-colors"
                                  >
                                    {feature}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl mb-6">Minecraft Development Skills</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                      <div>
                        <h4 className="text-lg text-green-400 mb-2">Server-Side</h4>
                        <p className="text-muted-foreground text-sm">
                          Java plugin development, Bukkit/Spigot API, server optimization, 
                          and custom game mechanics implementation.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg text-emerald-400 mb-2">Infrastructure</h4>
                        <p className="text-muted-foreground text-sm">
                          Server hosting, Docker containerization, load balancing, 
                          and scalable architecture design.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg text-green-500 mb-2">Community</h4>
                        <p className="text-muted-foreground text-sm">
                          Discord bot integration, player management systems, 
                          and community engagement tools.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}