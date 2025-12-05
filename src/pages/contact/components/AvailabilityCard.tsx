import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import type { AvailabilityStatus } from '../types';

interface AvailabilityCardProps {
  status: AvailabilityStatus;
}

const AvailabilityCard = ({ status }: AvailabilityCardProps) => {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div
              className={`w-4 h-4 rounded-full ${
                status.isAvailable ? 'bg-success' : 'bg-warning'
              } ${pulse ? 'animate-pulse-subtle' : ''}`}
            />
            <div
              className={`absolute inset-0 w-4 h-4 rounded-full ${
                status.isAvailable ? 'bg-success' : 'bg-warning'
              } opacity-20 animate-ping`}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {status.status}
            </h3>
            <p className="text-sm text-text-secondary">Current Status</p>
          </div>
        </div>
        <Icon
          name={status.isAvailable ? 'CheckCircle2' : 'Clock'}
          size={24}
          className={
            status.isAvailable ? 'text-success' : 'text-warning'
          }
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between py-2 border-t border-border">
          <span className="text-sm text-text-secondary">Response Time</span>
          <span className="text-sm font-medium text-foreground">
            {status.responseTime}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 border-t border-border">
          <span className="text-sm text-text-secondary">Next Available</span>
          <span className="text-sm font-medium text-foreground">
            {status.nextAvailable}
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-muted rounded-md">
        <p className="text-xs text-text-secondary">
          {status.isAvailable
            ? 'Currently accepting new projects and collaboration opportunities. Feel free to reach out!' :'Currently engaged in projects. New opportunities will be considered starting next month.'}
        </p>
      </div>
    </div>
  );
};

export default AvailabilityCard;