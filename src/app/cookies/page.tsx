import type { Metadata } from 'next';
import Cookies from '@/views/Cookies';

export const metadata: Metadata = {
  title: 'Gestion des cookies — HEXAIT',
  description: 'Gérez vos préférences de cookies — HEXAIT SASU.',
  alternates: { canonical: '/cookies' },
};

export default function Page() {
  return <Cookies />;
}
