import type { Metadata } from 'next';
import Blog from '@/views/Blog';

export const metadata: Metadata = {
  title: 'Blog technique — Développement web, SaaS et cloud | HEXAIT',
  description:
    "Articles techniques sur le développement web, React, Next.js, Node.js, cloud et DevOps. Retours d'expérience du studio HEXAIT.",
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return <Blog />;
}
