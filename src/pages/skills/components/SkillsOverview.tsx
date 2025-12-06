import Icon from '../../../components/AppIcon';

interface SkillsOverviewProps {
  totalSkills: number;
  coreSkills: number;
  projectsCompleted: number;
  githubContributions: number;
}

const SkillsOverview = ({
  totalSkills,
  coreSkills,
  projectsCompleted,
  githubContributions,
}: SkillsOverviewProps) => {
  const stats = [
    {
      icon: 'Code',
      label: 'Total Skills',
      value: totalSkills,
      color: 'var(--color-primary)',
      bgColor: 'bg-primary/10',
    },
    {
      icon: 'Star',
      label: 'Core Skills',
      value: coreSkills,
      color: 'var(--color-accent)',
      bgColor: 'bg-accent/10',
    },
    {
      icon: 'FolderGit2',
      label: 'Projects',
      value: projectsCompleted,
      color: 'var(--color-warning)',
      bgColor: 'bg-warning/10',
    },
    {
      icon: 'GitCommit',
      label: 'Contributions',
      value: githubContributions,
      color: 'var(--color-success)',
      bgColor: 'bg-success/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-all duration-base group"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center transition-transform duration-base group-hover:scale-110`}
            >
              <Icon
                name={stat.icon}
                size={24}
                color={stat.color}
                strokeWidth={2}
              />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsOverview;