import { Fragment, useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

/**
 * Renders text with each character wrapped in a <mask><char> pair so it can
 * slide up from behind a clipping line on scroll. Words are kept atomic
 * (white-space: nowrap) so lines never break mid-word or with orphan punctuation.
 *
 * SSR-safe: produces the same DOM on server and client. The `.split` class is
 * added in JSX so CSS visibility:hidden is correctly toggled.
 */
export function TextReveal({ children, className, as: Tag = 'span' }: TextRevealProps) {
  const text = typeof children === 'string' ? children : '';
  const tokens = text.split(/(\s+)/);

  let charIndex = 0;
  const nodes: ReactNode[] = [];
  let key = 0;

  for (const token of tokens) {
    if (!token) continue;

    if (/^\s+$/.test(token)) {
      nodes.push(<Fragment key={key++}> </Fragment>);
      continue;
    }

    const chars = Array.from(token);
    const wordChars = chars.map((char) => {
      const idx = charIndex++;
      const style = { '--i': idx } as CSSProperties;
      return (
        <span key={idx} className="mask">
          <span className="char" style={style}>{char}</span>
        </span>
      );
    });

    nodes.push(
      <span key={key++} className="word-wrap">{wordChars}</span>
    );
  }

  return (
    <Tag className={`split ${className ?? ''}`.trim()} data-text-reveal>
      {nodes}
    </Tag>
  );
}
