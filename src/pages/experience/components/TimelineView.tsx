import Icon from '../../../components/AppIcon';
import type { TimelineEvent } from '../types';

interface TimelineViewProps {
  events: TimelineEvent[];
}

const TimelineView = ({ events }: TimelineViewProps) => {
  const getEventColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'work':
        return 'bg-primary border-primary';
      case 'education':
        return 'bg-accent border-accent';
      case 'certification':
        return 'bg-warning border-warning';
      case 'achievement':
        return 'bg-success border-success';
      default:
        return 'bg-muted border-muted';
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-12">
            <div
              className={`absolute left-0 w-8 h-8 rounded-full border-2 ${getEventColor(event.type)} flex items-center justify-center`}
            >
              <Icon name={event.icon} size={16} className="text-white" />
            </div>
            
            <div className="bg-card rounded-lg border border-border p-4 hover:shadow-sm transition-all duration-base">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {event.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {event.description}
                  </p>
                </div>
                <span className="text-xs text-text-secondary font-medium ml-2">
                  {event.date}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  event.type === 'work' ? 'bg-primary/10 text-primary' :
                  event.type === 'education' ? 'bg-accent/10 text-accent' :
                  event.type === 'certification'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                }`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineView;