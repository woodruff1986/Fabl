import {
  useEffect,
  useRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
};

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
