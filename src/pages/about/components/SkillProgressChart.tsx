import type { SkillProgress } from '../types';
import Icon from '../../../components/AppIcon';

interface SkillProgressChartProps {
  skills: SkillProgress[];
}

const SkillProgressChart = ({ skills }: SkillProgressChartProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Frontend': 'bg-primary',
      'Backend': 'bg-accent',
      'Tools': 'bg-success',
      'Soft Skills': 'bg-warning'
    };
    return colors[category] || 'bg-secondary';
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    if (level >= 30) return 'Beginner';
    return 'Learning';
  };

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Skill Progression</h2>
        <Icon name="TrendingUp" size={24} className="text-success" />
      </div>
      
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(skill.category)} text-white`}>
                    {skill.category}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{skill.description}</p>
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                <div className="text-xs text-text-secondary">{getLevelLabel(skill.level)}</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${getCategoryColor(skill.category)} transition-all duration-1000 ease-out rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-text-secondary">
              <span>Started: {skill.startDate}</span>
              <span>Current: {skill.currentLevel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgressChart;