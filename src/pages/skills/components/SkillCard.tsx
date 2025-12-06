import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-lg border border-border p-6 transition-all duration-base hover:shadow-lg hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-base group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <Icon
            name={skill.icon}
            size={24}
            color={skill.color}
            strokeWidth={2}
          />
        </div>
        {skill.isCore && (
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Core
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 font-headline">
        {skill.name}
      </h3>

      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
        {skill.description}
      </p>

      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-text-secondary">
              Proficiency
            </span>
            <span className="text-xs font-bold text-foreground">
              {skill.proficiency}%
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-slow"
              style={{
                width: isHovered ? `${skill.proficiency}%` : '0%',
                backgroundColor: skill.color,
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1 text-text-secondary">
            <Icon name="Clock" size={14} strokeWidth={2} />
            <span>{skill.yearsOfExperience}</span>
          </div>
          <div className="flex items-center space-x-1 text-text-secondary">
            <Icon name="FolderGit2" size={14} strokeWidth={2} />
            <span>{skill.projects} projects</span>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${skill.color}05 0%, transparent 100%)`,
        }}
      />
    </div>
  );
};

export default SkillCard;