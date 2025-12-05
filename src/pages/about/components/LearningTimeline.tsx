import { TimelineEvent } from '../types';
import Icon from '../../../components/AppIcon';

interface LearningTimelineProps {
  events: TimelineEvent[];
}

const LearningTimeline = ({ events }: LearningTimelineProps) => {
  const getTypeColor = (type: TimelineEvent['type']) => {
    const colors = {
      education: 'bg-primary',
      certification: 'bg-accent',
      milestone: 'bg-success',
      achievement: 'bg-warning'
    };
    return colors[type];
  };

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Learning Journey</h2>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-12">
              <div className={`absolute left-0 w-8 h-8 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}>
                <Icon name={event.icon} size={16} color="white" />
              </div>
              
              <div className="bg-surface rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                  <span className="text-sm text-text-secondary whitespace-nowrap ml-4">{event.date}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{event.description}</p>
                <div className="mt-2">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(event.type)} text-white`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;