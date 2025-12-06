import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { ExperienceProject } from '../types';

interface ProjectHighlightProps {
  project: ExperienceProject;
}

const ProjectHighlight = ({ project }: ProjectHighlightProps) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-all duration-base">
      <div className="aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-base"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-foreground mb-2 font-headline">
          {project.name}
        </h4>
        <p className="text-sm text-text-secondary mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <div className="mb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h5 className="text-xs font-semibold text-foreground mb-1.5">Key Highlights:</h5>
          <ul className="space-y-1">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs text-text-secondary">
                <Icon name="Check" size={12} className="text-success flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.link && (
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(project.link, '_blank')}
          >
            View Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectHighlight;