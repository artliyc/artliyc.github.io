import type { ImageMetadata } from 'astro';
import behanceQr from '../assets/images/qr/behance.png';
import linkedinQr from '../assets/images/qr/linkedin.png';

export interface Contact {
  /** Title lines; more than one line forces a break as in the mockup. */
  title: string[];
  href: string;
  value?: string;
  qr?: { src: ImageMetadata; fit: 'fill' | 'contain' };
}

export const contacts: Contact[] = [
  { title: ['Электронная', 'почта'], value: 'artliyc@gmail.com', href: 'mailto:artliyc@gmail.com' },
  { title: ['Behance'], href: 'https://www.behance.net/artliyc', qr: { src: behanceQr, fit: 'fill' } },
  { title: ['Телефон'], value: '+381617305766', href: 'tel:+381617305766' },
  {
    title: ['LinkedIn'],
    href: 'https://www.linkedin.com/in/irina-kniazeva-uiux/',
    qr: { src: linkedinQr, fit: 'contain' },
  },
  { title: ['Телеграм'], value: '@Artliyc', href: 'https://t.me/Artliyc' },
];
