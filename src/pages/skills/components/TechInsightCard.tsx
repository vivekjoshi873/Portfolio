import Icon from '../../../components/AppIcon';
import type { TechInsight } from '../types';

interface TechInsightCardProps {
  insight: TechInsight;
}

const TechInsightCard = ({ insight }: TechInsightCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-all duration-base group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {insight.category}
            </span>
            <span className="text-xs text-text-secondary">{insight.date}</span>
          </div>
          <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-fast font-headline">
            {insight.title}
          </h4>
        </div>
        <Icon
          name="TrendingUp"
          size={20}
          color="var(--color-primary)"
          strokeWidth={2}
        />
      </div>

      <p className="text-sm text-text-secondary mb-4 line-clamp-3">
        {insight.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {insight.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md hover:bg-muted transition-colors duration-fast"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechInsightCard;