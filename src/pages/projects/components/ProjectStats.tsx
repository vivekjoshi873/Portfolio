import Icon from '../../../components/AppIcon';

interface ProjectStatsProps {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  totalStars: number;
  totalCommits: number;
}

const ProjectStats = ({
  totalProjects,
  completedProjects,
  inProgressProjects,
  totalStars,
  totalCommits,
}: ProjectStatsProps) => {
  const stats = [
    {
      icon: 'FolderGit2',
      label: 'Total Projects',
      value: totalProjects,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: 'CheckCircle2',
      label: 'Completed',
      value: completedProjects,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: 'Clock',
      label: 'In Progress',
      value: inProgressProjects,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      icon: 'Star',
      label: 'GitHub Stars',
      value: totalStars,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: 'GitCommit',
      label: 'Total Commits',
      value: totalCommits,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow duration-base"
        >
          <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-3`}>
            <Icon name={stat.icon} size={24} strokeWidth={2} className={stat.color} />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
          <p className="text-sm text-text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;