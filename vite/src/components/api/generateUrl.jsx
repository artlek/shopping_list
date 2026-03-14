export function generateUrl(path) {
    const prefix = "api";
    const domain = import.meta.env.VITE_DOMAIN;
    const url = domain + "/" + prefix + "/" + path;
    return url;
}