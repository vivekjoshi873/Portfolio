import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-all duration-base">
      <div className="aspect-video overflow-hidden bg-muted">
        <Image
          src={certificate.image}
          alt={certificate.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-foreground mb-1 font-headline">
              {certificate.name}
            </h4>
            <p className="text-xs text-primary font-medium mb-1">
              {certificate.issuer}
            </p>
            <p className="text-xs text-text-secondary">
              Issued: {certificate.date}
            </p>
          </div>
          <Icon name="Award" size={20} className="text-accent flex-shrink-0" />
        </div>

        <div className="mb-3">
          <p className="text-xs text-text-secondary mb-1">
            Credential ID: {certificate.credentialId}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {certificate.link && (
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(certificate.link, '_blank')}
          >
            View Certificate
          </Button>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;