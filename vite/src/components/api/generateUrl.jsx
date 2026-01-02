export function generateUrl(path) {
    const prefix = "api";
<<<<<<< HEAD
    const url = '/' + prefix + "/api/" + path
=======
    const domain = import.meta.env.VITE_DOMAIN;
    const url = domain + "/" + prefix + "/" + path;
>>>>>>> c08c6cc (Add InfoDialog component to inform when new version)
    return url;
}