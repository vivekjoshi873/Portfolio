import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { CodeSnippet } from '../types';

interface CodeSnippetCardProps {
  snippet: CodeSnippet;
}

const CodeSnippetCard = ({ snippet }: CodeSnippetCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon name="Code" size={16} color="var(--color-primary)" strokeWidth={2} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {snippet.title}
            </h4>
            <p className="text-xs text-text-secondary">{snippet.language}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={copied ? 'Check' : 'Copy'}
          iconPosition="left"
          iconSize={14}
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>

      <div className="p-4">
        <p className="text-sm text-text-secondary mb-3">{snippet.description}</p>
        <div className="bg-neutral-900 rounded-md p-4 overflow-x-auto">
          <pre className="text-xs text-neutral-100 font-mono">
            <code>{snippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetCard;