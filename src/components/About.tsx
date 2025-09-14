import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Brain, Heart, Globe, Users, Lightbulb } from 'lucide-react';

const certifications = [
  'The Complete Node.js Developer Course (3rd Edition) — Udemy',
  'Python for Data Science and Machine Learning Bootcamp — Udemy',
  'The Web Developer Bootcamp 2023 — Udemy',
  'Java Programming Masterclass for Software Developers — Udemy',
  'Master Modern JavaScript — Udemy',
  'Develop Minecraft Plugins (Java) — Udemy'
];

const interests = [
  {
    icon: Brain,
    title: 'Philosophy & Ethics',
    description: 'Exploring the deeper questions of technology, society, and human nature.'
  },
  {
    icon: Lightbulb,
    title: 'Science & Innovation',
    description: 'Passionate about scientific discovery and technological advancement.'
  },
  {
    icon: Globe,
    title: 'Democracy & Society',
    description: 'Advocating for democratic values and social progress through technology.'
  },
  {
    icon: Heart,
    title: 'Capitalism & Ethics',
    description: 'Balancing free market principles with ethical business practices.'
  }
];

export function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/10 via-background to-muted/5 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-muted/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            More than just code - exploring the <span className="text-primary">intersection</span> of technology, <span className="text-purple-400">ethics</span>, and human progress.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border bg-card/80 backdrop-blur-xl shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="p-4 rounded-full bg-muted text-muted-foreground"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="h-8 w-8" />
                </motion.div>
                <h3 className="text-3xl">The Human Behind the Code</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
                <div>
                  <p className="text-muted-foreground mb-4">
                    I'm a passionate full-stack developer based in the <span className="text-primary">United States</span>, 
                    who discovered the magic of programming at just <span className="text-purple-400">5 years old</span>. 
                    What started as childhood curiosity has evolved into a comprehensive expertise spanning multiple 
                    programming languages, frameworks, and cutting-edge technologies.
                  </p>
                  <p className="text-muted-foreground">
                    My journey through technology has been driven by an insatiable curiosity about how things work, 
                    from the smallest algorithms to the largest distributed systems. I believe in building solutions 
                    that not only solve problems but also push the boundaries of what's possible.
                  </p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-4">
                    Beyond coding, I'm deeply fascinated by <span className="text-purple-400">all kinds of sciences</span> — 
                    from computer science and mathematics to physics, biology, and cognitive science. I'm equally 
                    passionate about <span className="text-primary">philosophy</span> and <span className="text-purple-400">ethics</span>, 
                    exploring how technology intersects with human values and societal progress.
                  </p>
                  <p className="text-muted-foreground">
                    I believe in the power of <span className="text-primary">democratic values</span>{' '}
                    and ethical approaches to technology development. My diverse interests fuel my approach to 
                    problem-solving, bringing interdisciplinary thinking to every project I tackle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    z: 20
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="h-full border bg-card/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="inline-flex p-4 rounded-full bg-muted text-muted-foreground mb-4 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <h4 className="text-xl mb-2 group-hover:text-primary transition-colors">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border bg-card/80 backdrop-blur-xl shadow-xl">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  className="p-4 rounded-full bg-muted text-muted-foreground"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-8 w-8" />
                </motion.div>
                <CardTitle className="text-3xl">Certifications & Learning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-4"
              >
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Badge
                        variant="outline"
                        className="w-full justify-start text-left p-4 h-auto text-sm border-2 border-muted hover:border-primary/60 hover:bg-muted/50 transition-all duration-300 cursor-pointer whitespace-normal"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="break-words">{cert}</span>
                        </div>
                      </Badge>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <p className="text-muted-foreground italic">
                  Continuous learning is the key to staying ahead in technology.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}