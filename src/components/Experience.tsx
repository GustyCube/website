import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    role: 'CEO & Owner',
    company: 'Gainlabs.us',
    period: '2025–present',
    description: 'Researching and developing cutting-edge technologies in various categories.',
    current: true
  },
  {
    role: 'Developer',
    company: 'Pingcraft.io',
    period: '2024',
    description: 'Maintained a Minecraft server listing platform; improved retention and UX.',
    current: false
  },
  {
    role: 'Owner',
    company: 'GustyHost',
    period: '2023–2025',
    description: 'Scaled a hosting company; billing systems, API provisioning, DDoS mitigation.',
    current: false
  },
  {
    role: 'Owner',
    company: 'Pantther Studios / Pantther Studio',
    period: '2023–2024',
    description: 'Game design + digital content production.',
    current: false
  },
  {
    role: 'Support & Developer',
    company: 'Expanse.host',
    period: '2024',
    description: 'Tier 2 support; backend scripts for server management.',
    current: false
  }
];

export function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Experience</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning <span className="text-primary">full-stack development</span>, <span className="text-purple-400">AI infrastructure</span>, and meaningful collaborations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="relative overflow-hidden border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                {experience.current && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-primary">
                    <div className="absolute -top-12 -right-1 text-xs text-primary-foreground transform rotate-45">
                      Current
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{experience.role}</CardTitle>
                      <CardDescription className="text-lg text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}