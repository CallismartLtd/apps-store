/**
 * Application configuration file
 */
export const storeConfig = {
    apiUrl: new URL( import.meta.env.VITE_API_URL ),
    buildEndpoint(path) {
        const url = new URL(this.apiUrl);
        url.pathname = `${this.apiUrl.pathname.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
        return url;
    },
}