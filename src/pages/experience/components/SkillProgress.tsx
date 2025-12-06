import Icon from '../../../components/AppIcon';
import type { SkillDevelopment } from '../types';

interface SkillProgressProps {
  skill: SkillDevelopment;
}

const SkillProgress = ({ skill }: SkillProgressProps) => {
  const getLevelColor = (level: number) => {
    if (level >= 80) return 'text-success';
    if (level >= 60) return 'text-primary';
    if (level >= 40) return 'text-warning';
    return 'text-text-secondary';
  };

  const getLevelText = (level: number) => {
    if (level >= 80) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    if (level >= 40) return 'Developing';
    return 'Beginner';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-sm transition-all duration-base">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-foreground mb-1">
            {skill.skill}
          </h4>
          <p className="text-xs text-text-secondary line-clamp-2">
            {skill.description}
          </p>
        </div>
        <span className={`text-xs font-medium ${getLevelColor(skill.level)} ml-2`}>
          {getLevelText(skill.level)}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-secondary">Proficiency</span>
          <span className="font-medium text-foreground">{skill.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-base"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs mt-2">
          <span className="text-text-secondary">Growth Progress</span>
          <span className="font-medium text-foreground">{skill.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-success rounded-full transition-all duration-base"
            style={{ width: `${skill.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-1 mt-3 text-xs text-success">
        <Icon name="TrendingUp" size={12} />
        <span>Actively improving</span>
      </div>
    </div>
  );
};

export default SkillProgress;