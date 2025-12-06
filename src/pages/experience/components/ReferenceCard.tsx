import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { Reference } from '../types';

interface ReferenceCardProps {
  reference: Reference;
}

const ReferenceCard = ({ reference }: ReferenceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-all duration-base">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-muted">
          <Image
            src={reference.avatar}
            alt={reference.avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-foreground mb-0.5">
            {reference.name}
          </h4>
          <p className="text-xs text-text-secondary mb-0.5">
            {reference.position}
          </p>
          <p className="text-xs text-primary font-medium">
            {reference.company}
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, idx) => (
            <Icon
              key={idx}
              name="Star"
              size={12}
              className={idx < reference.rating ? 'text-warning fill-warning' : 'text-muted'}
            />
          ))}
        </div>
      </div>

      <div className="mb-3">
        <p className={`text-sm text-text-secondary leading-relaxed ${!isExpanded && 'line-clamp-3'}`}>
          "{reference.testimonial}"
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">
          {reference.date}
        </span>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </Button>
      </div>
    </div>
  );
};

export default ReferenceCard;