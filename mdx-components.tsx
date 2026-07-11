import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <a
        {...props}
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
      />
    ),
    ...components,
  };
}
