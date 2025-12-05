import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { ContactMethod } from '../types';

interface ContactMethodsCardProps {
  methods: ContactMethod[];
}

const ContactMethodsCard = ({ methods }: ContactMethodsCardProps) => {
  const handleMethodClick = (method: ContactMethod) => {
    if (method.action.startsWith('mailto:')) {
      window.location.href = method.action;
    } else if (method.action.startsWith('tel:')) {
      window.location.href = method.action;
    } else if (method.action.startsWith('http')) {
      window.open(method.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="MessageSquare" size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Get in Touch
        </h3>
      </div>

      <div className="space-y-4">
        {methods.map((method) => (
          <div
            key={method.id}
            className="group bg-surface hover:bg-muted rounded-lg p-4 border border-border transition-all duration-base hover:shadow-md"
          >
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-base group-hover:scale-110"
                style={{ backgroundColor: `${method.color}20` }}
              >
                <Icon
                  name={method.icon}
                  size={24}
                  style={{ color: method.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {method.title}
                </h4>
                <p className="text-sm text-primary font-medium mb-1 break-all">
                  {method.value}
                </p>
                <p className="text-xs text-text-secondary">
                  {method.description}
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
                onClick={() => handleMethodClick(method)}
              >
                Contact via {method.title}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMethodsCard;