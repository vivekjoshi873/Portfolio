import { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import AvailabilityCard from './components/AvailabilityCard';
import SocialMediaCard from './components/SocialMediaCard';
import ContactMethodsCard from './components/ContactMethodsCard';
import ContactForm from './components/ContactForm';
import CalendarBooking from './components/CalendarBooking';
import LocationMap from './components/LocationMap';
import type {
  AvailabilityStatus,
  SocialLink,
  ContactMethod,
} from './types';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availabilityStatus: AvailabilityStatus = {
    isAvailable: true,
    status: 'Available for New Projects',
    nextAvailable: 'Immediately',
    responseTime: 'Within 24 hours',
  };

  const socialLinks: SocialLink[] = [
    {
      id: '1',
      platform: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/vivek-dev',
      username: 'vivek-dev',
      followers: '2.5K',
      color: '#0A66C2',
    },
    {
      id: '2',
      platform: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/vivek-dev',
      username: 'vivek-dev',
      followers: '850',
      color: '#181717',
    },
    {
      id: '3',
      platform: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/vivek_dev',
      username: 'vivek_dev',
      followers: '1.2K',
      color: '#1DA1F2',
    },
    {
      id: '4',
      platform: 'Dev.to',
      icon: 'Code2',
      url: 'https://dev.to/vivek-dev',
      username: 'vivek-dev',
      followers: '450',
      color: '#0A0A0A',
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      icon: 'Mail',
      title: 'Email',
      value: 'vivek.dev@example.com',
      description: 'Best for detailed project discussions',
      action: 'mailto:vivek.dev@example.com',
      color: '#2563EB',
    },
    {
      id: '2',
      icon: 'Phone',
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Available Mon-Fri, 9 AM - 6 PM IST',
      action: 'tel:+919876543210',
      color: '#10B981',
    },
    {
      id: '3',
      icon: 'MessageSquare',
      title: 'WhatsApp',
      value: '+91 98765 43210',
      description: 'Quick responses for urgent matters',
      action: 'https://wa.me/919876543210',
      color: '#25D366',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 lg:pt-24">
        <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Icon name="Sparkles" size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">
                  Let's Connect
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-headline">
                Get in Touch
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Have a project in mind? Looking for a frontend developer? Or
                just want to say hello? I'd love to hear from you. Let's create
                something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Send"
                  iconPosition="right"
                  iconSize={20}
                  onClick={() =>
                    document
                      .getElementById('contact-form')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Send a Message
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  onClick={() =>
                    document
                      .getElementById('calendar-booking')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <div className="lg:col-span-1">
                  <AvailabilityCard status={availabilityStatus} />
                </div>
                <div className="lg:col-span-2">
                  <SocialMediaCard links={socialLinks} />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <div className="lg:col-span-1">
                  <ContactMethodsCard methods={contactMethods} />
                </div>
                <div className="lg:col-span-2" id="contact-form">
                  <ContactForm />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div id="calendar-booking">
                  <CalendarBooking />
                </div>
                <div>
                  <LocationMap />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-t from-primary/5 to-transparent">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
                <div className="text-center mb-8">
                  <Icon
                    name="Rocket"
                    size={48}
                    className="text-primary mx-auto mb-4"
                  />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-headline">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Whether you have a fully defined project or just an idea,
                    I'm here to help bring your vision to life. Let's discuss
                    how we can work together to create something exceptional.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <Icon
                      name="Zap"
                      size={32}
                      className="text-primary mx-auto mb-2"
                    />
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      Quick Response
                    </h3>
                    <p className="text-xs text-text-secondary">
                      24-hour reply guarantee
                    </p>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <Icon
                      name="Shield"
                      size={32}
                      className="text-primary mx-auto mb-2"
                    />
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      Confidential
                    </h3>
                    <p className="text-xs text-text-secondary">
                      NDA available upon request
                    </p>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <Icon
                      name="Users"
                      size={32}
                      className="text-primary mx-auto mb-2"
                    />
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      Collaborative
                    </h3>
                    <p className="text-xs text-text-secondary">
                      Open communication always
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                    iconSize={20}
                    onClick={() => window.open('/assets/cv.pdf', '_blank')}
                  >
                    Download My CV
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    iconName="Github"
                    iconPosition="left"
                    iconSize={20}
                    onClick={() =>
                      window.open(
                        'https://github.com/vivek-dev',
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    View GitHub Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-border">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg font-mono">
                      V
                    </span>
                  </div>
                  <span className="text-sm text-text-secondary">
                    © {new Date().getFullYear()} Vivek. All rights reserved.
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  {socialLinks.slice(0, 3).map((link) => (
                    <button
                      key={link.id}
                      onClick={() =>
                        window.open(link.url, '_blank', 'noopener,noreferrer')
                      }
                      className="w-8 h-8 rounded-lg bg-surface hover:bg-muted flex items-center justify-center transition-colors duration-fast"
                      aria-label={`Visit ${link.platform}`}
                    >
                      <Icon
                        name={link.icon}
                        size={18}
                        className="text-text-secondary hover:text-primary transition-colors duration-fast"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Contact;