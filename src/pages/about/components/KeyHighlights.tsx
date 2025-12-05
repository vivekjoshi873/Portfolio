import Icon from '../../../components/AppIcon';

interface Highlight {
  id: string;
  icon: string;
  title: string;
  value: string;
  description: string;
}

interface KeyHighlightsProps {
  highlights: Highlight[];
}

const KeyHighlights = ({ highlights }: KeyHighlightsProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Professional Highlights</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name={highlight.icon} size={28} color="white" />
            </div>
            
            <div className="text-3xl font-bold text-primary mb-2">{highlight.value}</div>
            <h3 className="text-sm font-semibold text-foreground mb-2">{highlight.title}</h3>
            <p className="text-xs text-text-secondary leading-relaxed">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyHighlights;