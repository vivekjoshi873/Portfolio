import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={24} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Location & Office
          </h3>
        </div>
      </div>

      <div className="relative h-64 sm:h-80 bg-muted">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Delhi, India Location"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=28.6139,77.2090&z=12&output=embed"
          className="border-0"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start space-x-3">
          <Icon name="MapPin" size={20} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Primary Location
            </p>
            <p className="text-sm text-text-secondary">
              Delhi, India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="Globe" size={20} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Remote Work
            </p>
            <p className="text-sm text-text-secondary">
              Available for remote collaboration worldwide (UTC+5:30 timezone)
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Working Hours
            </p>
            <p className="text-sm text-text-secondary">
              Monday - Friday: 9:00 AM - 6:00 PM IST
            </p>
            <p className="text-sm text-text-secondary">
              Weekend: Available for urgent matters
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-start space-x-3">
            <Icon name="Plane" size={20} className="text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Travel Availability
              </p>
              <p className="text-sm text-text-secondary">
                Open to on-site meetings and project discussions within India.
                International travel can be arranged for long-term projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;