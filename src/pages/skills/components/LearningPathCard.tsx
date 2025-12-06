import Icon from '../../../components/AppIcon';
import type { LearningPath } from '../types';

interface LearningPathCardProps {
  path: LearningPath;
}

const LearningPathCard = ({ path }: LearningPathCardProps) => {
  const progress = (path.currentLevel / path.targetLevel) * 100;

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-warning text-warning-foreground';
      case 'planned':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string): string => {
    switch (status) {
      case 'completed':
        return 'CheckCircle2';
      case 'in-progress':
        return 'Clock';
      case 'planned':
        return 'Calendar';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-base">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-semibold text-foreground font-headline">
          {path.skill}
        </h4>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(
            path.status
          )}`}
        >
          <Icon name={getStatusIcon(path.status)} size={12} strokeWidth={2} />
          <span className="capitalize">{path.status.replace('-', ' ')}</span>
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-secondary">Progress</span>
          <span className="text-sm font-semibold text-foreground">
            Level {path.currentLevel} / {path.targetLevel}
          </span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-slow"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Calendar" size={16} strokeWidth={2} />
          <span>Timeline: {path.timeline}</span>
        </div>

        <div>
          <div className="flex items-center space-x-2 text-sm text-text-secondary mb-2">
            <Icon name="BookOpen" size={16} strokeWidth={2} />
            <span>Learning Resources:</span>
          </div>
          <ul className="space-y-1 ml-6">
            {path.resources.map((resource, index) => (
              <li
                key={index}
                className="text-sm text-text-secondary flex items-start space-x-2"
              >
                <span className="text-primary mt-1">•</span>
                <span>{resource}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;