import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Github, Youtube, MessageCircle } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gc@gustycube.xyz',
      href: 'mailto:gc@gustycube.xyz',
      primary: true
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@gustycube',
      href: 'https://github.com/gustycube',
      primary: false
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: '@gustycube',
      href: 'https://youtube.com/@gustycube',
      primary: false
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Let's Connect</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Let's build something <span className="text-primary">amazing</span> together. I'm always excited to discuss <span className="text-purple-400">new ideas</span> and opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`h-full border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                  method.primary ? 'ring-2 ring-primary/20' : ''
                }`}>
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{method.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {method.value}
                      </p>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-muted/50 bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-4">Ready to Start a Project?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you need help with AI development, full-stack applications, 
                or infrastructure solutions, I'm here to help bring your ideas to life.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="mailto:gc@gustycube.xyz">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Me an Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}