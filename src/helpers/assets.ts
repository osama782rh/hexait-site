// apps/web/src/helpers/asset.ts
export const asset = (p: string) => {
  if (/^(?:https?:|data:|blob:)/i.test(p)) return p;
  const base = import.meta.env.BASE_URL || '/';
  // If already a full path starting with /images, use as-is
  if (p.startsWith('images/') || p.startsWith('/images/')) {
    return base.replace(/\/+$/, '') + '/' + p.replace(/^\/+/, '');
  }
  // Otherwise assume it's in /images/services/
  return base.replace(/\/+$/, '') + '/images/services/' + p.replace(/^\/+/, '');
};
