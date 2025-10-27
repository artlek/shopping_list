export function generateUrl(path) {
    const prefix = "api";
    const url = '/' + prefix + "/api/" + path
    return url;
}