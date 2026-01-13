import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'CEO & Founder',
    company: 'Ignyte Solutions',
    period: 'Aug 2025–present',
    description: 'Building infrastructure-level networking software focused on portable public IPv4 connectivity. Leading the design of Ignyte Direct—dedicated public IPs that follow devices across networks. Architecting distributed routing fabric using WireGuard-encrypted tunnels, DDoS-filtered edge ingress, and region-selectable origins.',
    current: true,
    url: 'https://ignyte.solutions'
  },
  {
    role: 'CEO & Owner',
    company: 'Gainlabs.us',
    period: '2025–present',
    description: 'Researching and developing cutting-edge technologies in various categories.',
    current: true,
    url: 'https://gainlabs.us'
  },
  {
    role: 'Founder',
    company: 'GustyCube Ventures',
    period: 'Jan 2023–present',
    description: 'Independent technical studio focused on full-stack development, systems engineering, and experimental software projects. Building applications across frontend, backend, and infrastructure layers. Prototyping tools involving automation, networking, and developer productivity.',
    current: true,
    url: 'https://gustycubeventures.com'
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
              <a href={experience.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="relative overflow-hidden border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
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
                        <CardDescription className="text-lg text-primary flex items-center gap-2">
                          {experience.company}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
