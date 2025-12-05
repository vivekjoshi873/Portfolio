import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import type { ContactFormData, FormErrors } from '../types';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'website', label: 'Website Development' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'other', label: 'Other' },
  ];

  const budgetOptions = [
    { value: 'small', label: 'Small ($1,000 - $5,000)' },
    { value: 'medium', label: 'Medium ($5,000 - $15,000)' },
    { value: 'large', label: 'Large ($15,000 - $50,000)' },
    { value: 'enterprise', label: 'Enterprise ($50,000+)' },
    { value: 'discuss', label: 'Open to Discussion' },
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'short', label: 'Short Term (1-2 months)' },
    { value: 'medium', label: 'Medium Term (3-6 months)' },
    { value: 'long', label: 'Long Term (6+ months)' },
    { value: 'flexible', label: 'Flexible Timeline' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: '',
      });
      setErrors({});

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Send" size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Send a Message
        </h3>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="CheckCircle2" size={20} className="text-success mt-0.5" />
            <div>
              <p className="text-sm font-medium text-success">
                Message sent successfully!
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Thank you for reaching out. I'll get back to you within 24-48
                hours.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            error={errors.phone}
            required
          />
          <Input
            label="Subject"
            type="text"
            placeholder="Project inquiry"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            error={errors.subject}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            label="Project Type"
            placeholder="Select type"
            options={projectTypeOptions}
            value={formData.projectType}
            onChange={(value) => handleChange('projectType', value as string)}
            error={errors.projectType}
            required
          />
          <Select
            label="Budget Range"
            placeholder="Select budget"
            options={budgetOptions}
            value={formData.budget}
            onChange={(value) => handleChange('budget', value as string)}
            error={errors.budget}
            required
          />
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData.timeline}
            onChange={(value) => handleChange('timeline', value as string)}
            error={errors.timeline}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            placeholder="Tell me about your project, goals, and any specific requirements..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={6}
            className={`w-full px-4 py-3 bg-background border rounded-lg text-sm text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-fast resize-none ${
              errors.message ? 'border-error' : 'border-border'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-error">{errors.message}</p>
          )}
          <p className="mt-1 text-xs text-text-secondary">
            Minimum 20 characters required
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            iconSize={18}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            iconName="Download"
            iconPosition="left"
            iconSize={18}
            onClick={() => window.open('/assets/cv.pdf', '_blank')}
          >
            Download CV
          </Button>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={18} className="text-success mt-0.5" />
            <p className="text-xs text-text-secondary">
              Your information is secure and will never be shared with third
              parties. I typically respond within 24-48 hours during business
              days.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;