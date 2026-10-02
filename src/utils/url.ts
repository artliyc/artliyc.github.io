/**
 * Builds an internal link that also works when the site is served from a
 * sub-path (GitHub Pages project sites live at /<repo>/).
 *
 *   url('/projects/nda/') → '/projects/nda/' locally, '/portfolio/projects/nda/' on Pages
 */
export function url(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
