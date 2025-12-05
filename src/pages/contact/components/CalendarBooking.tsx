import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { CalendarSlot } from '../types';

const CalendarBooking = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  const availableSlots: CalendarSlot[] = [
    {
      id: '1',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '30 min',
      available: true,
    },
    {
      id: '2',
      date: '2024-01-15',
      time: '2:00 PM',
      duration: '30 min',
      available: true,
    },
    {
      id: '3',
      date: '2024-01-15',
      time: '4:00 PM',
      duration: '30 min',
      available: false,
    },
    {
      id: '4',
      date: '2024-01-16',
      time: '11:00 AM',
      duration: '30 min',
      available: true,
    },
    {
      id: '5',
      date: '2024-01-16',
      time: '3:00 PM',
      duration: '30 min',
      available: true,
    },
    {
      id: '6',
      date: '2024-01-17',
      time: '9:00 AM',
      duration: '30 min',
      available: true,
    },
  ];

  const handleBooking = () => {
    if (selectedSlot) {
      alert(
        `Booking confirmed for slot ${selectedSlot}. You will receive a confirmation email shortly.`
      );
      setSelectedSlot('');
      setSelectedDate('');
    }
  };

  const groupedSlots = availableSlots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, CalendarSlot[]>);

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Calendar" size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Schedule a Meeting
        </h3>
      </div>

      <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={18} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Free 30-Minute Consultation
            </p>
            <p className="text-xs text-text-secondary">
              Book a time slot to discuss your project requirements, technical
              challenges, or collaboration opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(groupedSlots).map(([date, slots]) => (
          <div key={date} className="border border-border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="CalendarDays" size={18} className="text-primary" />
              <h4 className="text-sm font-semibold text-foreground">
                {new Date(date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => {
                    if (slot.available) {
                      setSelectedSlot(slot.id);
                      setSelectedDate(date);
                    }
                  }}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all duration-fast ${
                    selectedSlot === slot.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : slot.available
                      ? 'bg-surface hover:bg-muted border-border hover:border-primary text-foreground'
                      : 'bg-muted border-border text-text-secondary cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-1">
                    <Icon
                      name="Clock"
                      size={14}
                      className={
                        selectedSlot === slot.id
                          ? 'text-primary-foreground'
                          : 'text-text-secondary'
                      }
                    />
                    <span>{slot.time}</span>
                  </div>
                  <p
                    className={`text-xs mt-1 ${
                      selectedSlot === slot.id
                        ? 'text-primary-foreground/80'
                        : 'text-text-secondary'
                    }`}
                  >
                    {slot.duration}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSlot && (
        <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-start space-x-3 mb-3">
            <Icon name="CheckCircle2" size={20} className="text-success mt-0.5" />
            <div>
              <p className="text-sm font-medium text-success">
                Time slot selected
              </p>
              <p className="text-xs text-text-secondary mt-1">
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                at{' '}
                {
                  availableSlots.find((s) => s.id === selectedSlot)
                    ?.time
                }
              </p>
            </div>
          </div>
          <Button
            variant="default"
            size="default"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            iconSize={18}
            onClick={handleBooking}
          >
            Confirm Booking
          </Button>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-start space-x-3">
          <Icon name="Video" size={18} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Meeting Platform
            </p>
            <p className="text-xs text-text-secondary">
              Meetings are conducted via Google Meet or Zoom. You'll receive a
              meeting link via email after booking confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;