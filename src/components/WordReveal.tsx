import { Fragment } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface WordRevealProps {
  children: string;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

/**
 * Renders text with each word wrapped in a <span class="word"> so the words
 * can fade-blur in on scroll. Spaces are real text nodes — lines break only
 * at whitespace. The rendered element gets `data-reveal` so the global
 * IntersectionObserver picks it up automatically.
 */
export function WordReveal({ children, className, as: Tag = 'p' }: WordRevealProps) {
  const text = String(children ?? '');
  const words = text.split(/\s+/).filter(Boolean);

  const nodes: ReactNode[] = [];
  words.forEach((word, i) => {
    const style = { '--i': i } as CSSProperties;
    nodes.push(
      <span key={i} className="word" style={style}>{word}</span>
    );
    if (i < words.length - 1) nodes.push(<Fragment key={`s-${i}`}> </Fragment>);
  });

  return <Tag className={className} data-reveal>{nodes}</Tag>;
}
