const CANONICAL_HOST = "www.hexait.fr";
const APEX_HOSTS = new Set(["hexait.fr", "hexait.fr."]);

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const rawHost = context.request.headers.get("host")?.toLowerCase() ?? "";
  const host = rawHost.replace(/:\d+$/, "");

  // Safety fallback in case an external redirect rule incorrectly lands on /s.
  if (host === CANONICAL_HOST && url.pathname === "/s") {
    url.pathname = "/";
    return Response.redirect(url.toString(), 308);
  }

  if (APEX_HOSTS.has(host)) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 308);
  }

  return context.next();
};
