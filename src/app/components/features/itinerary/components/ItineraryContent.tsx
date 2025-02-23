"use client";

import ReactMarkdown from "react-markdown";
import { typography } from "@/app/lib/styles";
import type { Components } from "react-markdown";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type MarkdownHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
type MarkdownBlockquoteProps = DetailedHTMLProps<
  HTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
type MarkdownListProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
type MarkdownListItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;
type MarkdownStrongProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

interface ItineraryContentProps {
  content: string;
}

export function ItineraryContent({ content }: ItineraryContentProps) {
  const components: Partial<Components> = {
    h1: ({ children, ...props }: MarkdownHeadingProps) => (
      <h1
        {...props}
        className={`${typography.h1} ${typography.gradientText} mb-8`}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: MarkdownHeadingProps) => (
      <h2
        {...props}
        className={`${typography.h2} mt-12 mb-6 text-light-accent-primary dark:text-dark-accent-primary`}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: MarkdownHeadingProps) => (
      <h3
        {...props}
        className={`${typography.h3} mt-8 mb-4 text-light-text-primary dark:text-dark-text-primary`}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: MarkdownHeadingProps) => (
      <h4
        {...props}
        className={`${typography.h4} mt-6 mb-3 text-light-text-secondary dark:text-dark-text-secondary`}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children, ...props }: MarkdownBlockquoteProps) => (
      <blockquote
        {...props}
        className="border-l-4 border-light-accent-primary dark:border-dark-accent-primary pl-4 my-4 italic text-light-text-secondary dark:text-dark-text-secondary"
      >
        {children}
      </blockquote>
    ),
    ul: ({ children, ...props }: MarkdownListProps) => (
      <ul {...props} className="list-disc list-inside space-y-2 my-4">
        {children}
      </ul>
    ),
    li: ({ children, ...props }: MarkdownListItemProps) => (
      <li
        {...props}
        className="text-light-text-primary dark:text-dark-text-primary"
      >
        {children}
      </li>
    ),
    strong: ({ children, ...props }: MarkdownStrongProps) => (
      <strong
        {...props}
        className="font-bold text-light-accent-primary dark:text-dark-accent-primary"
      >
        {children}
      </strong>
    ),
  };

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
