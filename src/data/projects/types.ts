import type { ImageMetadata } from 'astro';

/** A paragraph block or a bulleted list inside a text section. */
export type TextBlock = { paragraphs: string[] } | { list: string[] };

export interface TextSection {
  title: string;
  blocks: TextBlock[];
}

export interface GalleryImage {
  src: ImageMetadata;
  /** Slot size in px at the 402px frame; the slot scales down on narrower screens. */
  width: number;
  height: number;
  fit?: 'cover' | 'contain';
}

export interface GalleryItem {
  caption?: string;
  /**
   * list — captioned column of screens; single — one captioned image;
   * grid — two columns of phone screens.
   */
  layout: 'list' | 'single' | 'grid';
  images: GalleryImage[];
}

export interface ProjectLink {
  label: string;
  href: string;
  qr?: ImageMetadata;
}

export interface Project {
  slug: string;

  /** Card on the main page. */
  title: string;
  description: string[];
  tags: string[];
  thumbnail: ImageMetadata;
  /**
   * Crop of the thumbnail inside its 330×260 slot, in percent of the slot
   * (taken from the Figma image fill). Omitted when the image simply covers it.
   */
  crop?: { top: number; left: number; width: number; height: number };

  /** Project page. */
  pageTitle?: string;
  company?: string;
  meta: { tags: string; about: string };
  sections: TextSection[];
  /** Groups are separated by 30px, items inside a group by 16px. */
  gallery: GalleryItem[][];
  link?: ProjectLink;
}
