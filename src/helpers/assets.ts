// apps/web/src/helpers/asset.ts
export const asset = (p: string) => {
  if (/^(?:https?:|data:|blob:)/i.test(p)) return p;
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/+$/, '') + '/' + p.replace(/^\/+/, '');
};
