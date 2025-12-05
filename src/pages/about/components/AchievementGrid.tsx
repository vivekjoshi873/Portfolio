import type { Achievement } from '../types';
import Icon from '../../../components/AppIcon';
interface AchievementGridProps {
  achievements: Achievement[];
}

const AchievementGrid = ({ achievements }: AchievementGridProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Key Achievements</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-surface rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name={achievement.icon} size={24} className="text-primary" />
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">{achievement.description}</p>
            
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Icon name="Calendar" size={14} />
              <span>{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementGrid;