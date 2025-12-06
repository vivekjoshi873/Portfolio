import Icon from '../../../components/AppIcon';

interface StatsCardProps {
  icon: string;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

const StatsCard = ({ icon, label, value, trend, trendUp }: StatsCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-sm transition-all duration-base">
      <div className="flex items-start justify-between mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name={icon} size={20} className="text-primary" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${
            trendUp ? 'text-success' : 'text-error'
          }`}>
            <Icon name={trendUp ? 'TrendingUp' : 'TrendingDown'} size={12} />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground mb-1 font-headline">
          {value}
        </p>
        <p className="text-sm text-text-secondary">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;