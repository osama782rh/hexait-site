import React from 'react';

type Props = React.PropsWithChildren<{ id?: string; className?: string }>;

export default function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 ${className || ""}`}>
      {children}
    </section>
  );
}