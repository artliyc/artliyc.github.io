import type { ImageMetadata } from 'astro';
import behanceQr from '../assets/images/qr/behance.png';
import linkedinQr from '../assets/images/qr/linkedin.png';

export interface Contact {
  /** Title lines; more than one line forces a break as in the mockup. */
  title: string[];
  href: string;
  value?: string;
  qr?: {
    src: ImageMetadata;
    fit: 'fill' | 'contain';
    /**
     * Width of the QR box on desktop, in px of the 1920 frame (214 by default).
     * The Behance source image is narrower than a square, so its box is widened
     * to keep the code square.
     */
    desktopWidth?: number;
  };
}

export const contacts: Contact[] = [
  { title: ['Электронная', 'почта'], value: 'artliyc@gmail.com', href: 'mailto:artliyc@gmail.com' },
  { title: ['Behance'], href: 'https://www.behance.net/artliyc', qr: { src: behanceQr, fit: 'fill', desktopWidth: 250 } },
  { title: ['Телефон'], value: '+381617305766', href: 'tel:+381617305766' },
  {
    title: ['LinkedIn'],
    href: 'https://www.linkedin.com/in/irina-kniazeva-uiux/',
    qr: { src: linkedinQr, fit: 'contain' },
  },
  { title: ['Телеграм'], value: '@Artliyc', href: 'https://t.me/Artliyc' },
];
