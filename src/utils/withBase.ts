// BASE_URL is '/' for root deployments and may end with a slash depending on config.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path (e.g. '/kontakt/') with the configured base. */
export function withBase(path: string): string {
  return `${base}${path}`;
}
