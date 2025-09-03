/**
 * Application configuration file
 */
export const storeConfig = {
    appName: 'Callismart Official App Store',
    apiUrl: new URL( import.meta.env.VITE_API_URL ),
    supportUrl: new URL( import.meta.env.VITE_SUPPORT_URL ),
    buildEndpoint(path) {
        const url = new URL(this.apiUrl);
        url.pathname = `${this.apiUrl.pathname.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
        return url;
    },
}