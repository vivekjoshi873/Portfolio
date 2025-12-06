import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { HeroContent as HeroContentType, CTAButton } from '../types';

interface HeroContentProps {
  content: HeroContentType;
  ctaButtons: CTAButton[];
  onCTAClick: (action: string) => void;
}

const HeroContent = ({ content, ctaButtons, onCTAClick }: HeroContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse-subtle"></div>
          <span className="text-sm font-medium text-primary">
            {content.availability.message}
          </span>
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-headline"
      >
        {content.greeting}{' '}
        <span className="text-primary relative inline-block">
          {content.name}
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </span>
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6"
      >
        {content.title}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
      >
        {content.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      >
        {ctaButtons.map((button) => (
          <Button
            key={button.id}
            variant={button.variant}
            size="lg"
            iconName={button.icon}
            iconPosition="left"
            iconSize={20}
            onClick={() => onCTAClick(button.action)}
            className="min-w-[200px]"
          >
            {button.label}
          </Button>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-text-secondary"
        >
          <Icon name="ChevronDown" size={32} strokeWidth={2} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;