import { Testimonial } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

const TestimonialCard = ({ testimonials }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < rating ? 'Star' : 'Star'}
        size={16}
        className={index < rating ? 'text-warning fill-warning' : 'text-muted'}
      />
    ));
  };

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Testimonials & Recommendations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-surface rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground truncate">{testimonial.name}</h3>
                <p className="text-sm text-text-secondary truncate">{testimonial.role}</p>
                <p className="text-xs text-primary truncate">{testimonial.company}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mb-3">
              {renderStars(testimonial.rating)}
            </div>
            
            <div className="relative">
              <Icon name="Quote" size={24} className="absolute -top-2 -left-2 text-primary opacity-20" />
              <p className="text-text-secondary text-sm leading-relaxed pl-6">{testimonial.content}</p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <span className="text-xs text-text-secondary">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;