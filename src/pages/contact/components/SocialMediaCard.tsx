import Icon from '../../../components/AppIcon';
import type { SocialLink } from '../types';

interface SocialMediaCardProps {
  links: SocialLink[];
}

const SocialMediaCard = ({ links }: SocialMediaCardProps) => {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Share2" size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Connect on Social Media
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleSocialClick(link.url)}
            className="group relative overflow-hidden bg-surface hover:bg-muted rounded-lg p-4 border border-border transition-all duration-base hover:shadow-md hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-base`}
                style={{ backgroundColor: `${link.color}20` }}
              >
                <Icon
                  name={link.icon}
                  size={20}
                  style={{ color: link.color }}
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-fast">
                  {link.platform}
                </p>
                <p className="text-xs text-text-secondary">
                  @{link.username}
                </p>
              </div>
              <Icon
                name="ExternalLink"
                size={16}
                className="text-text-secondary group-hover:text-primary transition-colors duration-fast"
              />
            </div>
            {link.followers && (
              <div className="mt-2 pt-2 border-t border-border">
                <p className="text-xs text-text-secondary">
                  {link.followers} followers
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={18} className="text-primary mt-0.5" />
          <p className="text-xs text-text-secondary">
            Follow me on social media for development updates, tech insights,
            and behind-the-scenes content from my coding journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;