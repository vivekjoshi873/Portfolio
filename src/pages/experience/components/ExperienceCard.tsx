import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-base overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
            <Image
              src={experience.companyLogo}
              alt={experience.companyLogoAlt}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-foreground mb-1 font-headline">
              {experience.position}
            </h3>
            <p className="text-base font-medium text-primary mb-1">
              {experience.company}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <Icon name="Calendar" size={14} />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="MapPin" size={14} />
                {experience.location}
              </span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                {experience.type}
              </span>
            </div>
          </div>
        </div>

        <p className="text-text-secondary mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Icon name="Target" size={16} />
            Key Responsibilities
          </h4>
          <ul className="space-y-1.5">
            {experience.responsibilities.slice(0, isExpanded ? undefined : 3).map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                <Icon name="ChevronRight" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {isExpanded && (
          <>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon name="Award" size={16} />
                Key Achievements
              </h4>
              <ul className="space-y-1.5">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Icon name="Star" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
          iconPosition="right"
          className="mt-2"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;