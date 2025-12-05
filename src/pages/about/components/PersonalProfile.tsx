import { PersonalInfo } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

interface PersonalProfileProps {
  info: PersonalInfo;
}

const PersonalProfile = ({ info }: PersonalProfileProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative px-6 pb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-20">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-4 border-background overflow-hidden shadow-xl">
              <Image
                src={info.avatar}
                alt={info.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-success rounded-full border-4 border-background"></div>
          </div>
          
          <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-3xl font-bold text-foreground mb-2">{info.name}</h1>
            <p className="text-lg text-primary font-medium mb-3">{info.title}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>{info.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Briefcase" size={16} />
                <span>{info.experience}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium">Available for Work</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">About Me</h2>
            <p className="text-text-secondary leading-relaxed">{info.bio}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Development Philosophy</h2>
            <p className="text-text-secondary leading-relaxed">{info.philosophy}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">My Approach</h2>
            <p className="text-text-secondary leading-relaxed">{info.approach}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;