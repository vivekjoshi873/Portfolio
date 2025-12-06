import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-center space-x-4">
        {links.map((link) => (
          <motion.div
            key={link.id}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-base shadow-sm hover:shadow-md group"
              aria-label={`Visit ${link.platform} profile: ${link.username}`}
            >
              <Icon
                name={link.icon as any}
                size={20}
                className="text-text-secondary group-hover:text-primary transition-colors duration-base"
                strokeWidth={2}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;