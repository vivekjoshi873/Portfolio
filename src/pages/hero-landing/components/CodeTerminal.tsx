import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import type { CodeSnippet } from '../types';

interface CodeTerminalProps {
  snippets: CodeSnippet[];
}

const CodeTerminal = ({ snippets }: CodeTerminalProps) => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = snippets[currentSnippet];
    let currentIndex = 0;
    setDisplayedCode('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % snippets.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentSnippet, snippets]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-neutral-800">
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSnippet}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-xs text-neutral-400 font-mono"
            >
              {snippets[currentSnippet].filename}
            </motion.span>
          </AnimatePresence>
          <div className="flex items-center space-x-2">
            <Icon name="Code2" size={14} className="text-neutral-400" />
          </div>
        </div>

        <div className="p-4 min-h-[200px] font-mono text-sm">
          <AnimatePresence mode="wait">
            <motion.pre
              key={currentSnippet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-neutral-100"
            >
              <code>
                {displayedCode}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-primary ml-1"
                  />
                )}
              </code>
            </motion.pre>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 border-t border-neutral-700">
          {snippets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSnippet(index)}
              className={`w-2 h-2 rounded-full transition-all duration-base ${
                index === currentSnippet
                  ? 'bg-primary w-6' :'bg-neutral-600 hover:bg-neutral-500'
              }`}
              aria-label={`View code snippet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeTerminal;