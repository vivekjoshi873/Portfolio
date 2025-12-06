import type { GitHubContribution } from '../types';

interface GitHubActivityProps {
  contributions: GitHubContribution[];
}

const GitHubActivity = ({ contributions }: GitHubActivityProps) => {
  const getLevelColor = (level: number): string => {
    const colors = [
      'bg-neutral-200',
      'bg-success/30',
      'bg-success/50',
      'bg-success/70',
      'bg-success',
    ];
    return colors[level] || colors[0];
  };

  const weeks: GitHubContribution[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground font-headline">
          GitHub Contribution Activity
        </h3>
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <span>Less</span>
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex space-x-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col space-y-1">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${getLevelColor(
                    day.level
                  )} transition-all duration-fast hover:ring-2 hover:ring-primary cursor-pointer`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">
            {contributions.reduce((sum, day) => sum + day.count, 0)}
          </div>
          <div className="text-xs text-text-secondary">Total Contributions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">
            {contributions.filter((day) => day.count > 0).length}
          </div>
          <div className="text-xs text-text-secondary">Active Days</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">
            {Math.max(...contributions.map((day) => day.count))}
          </div>
          <div className="text-xs text-text-secondary">Max Daily</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">
            {(
              contributions.reduce((sum, day) => sum + day.count, 0) /
              contributions.filter((day) => day.count > 0).length
            ).toFixed(1)}
          </div>
          <div className="text-xs text-text-secondary">Avg Daily</div>
        </div>
      </div>
    </div>
  );
};

export default GitHubActivity;