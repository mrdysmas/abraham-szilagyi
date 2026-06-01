const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export const withBase = (path = "/") => {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    /^[a-z][a-z0-9+.-]*:/i.test(path)
  ) {
    return path;
  }

  if (!basePath) {
    return path;
  }

  return path === "/" ? `${basePath}/` : `${basePath}${path}`;
};

export const withoutBase = (pathname = "/") => {
  if (!basePath) {
    return pathname;
  }

  if (pathname === basePath) {
    return "/";
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || "/";
  }

  return pathname;
};
