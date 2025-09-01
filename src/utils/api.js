import { storeConfig } from "../../config";

// simple in-memory cache
const cache = new Map();

/**
 * Fetch from API with caching and optional query params.
 *
 * @param {string} path
 * @param {Object} options - Fetch options (signal, params).
 * @param {boolean} useCache
 */
export async function fetchFromApi( path, options = {}, useCache = true ) {
  const { signal, params } = options;
  const url = new URL( path, storeConfig.apiUrl );

  if ( params ) {
    Object.entries( params ).forEach( ( [ key, value ] ) => {
      url.searchParams.append( key, value );
    } );
  }

  if ( useCache && cache.has( url.href ) ) {
    return cache.get( url.href );
  }

  const response = await fetch( url.href, { signal } );

  if ( ! response.ok ) {
    throw new Error( `Request failed with status ${response.status}` );
  }

  const json = await response.json();

  if ( ! json.success ) {
    throw new Error( json.message || "Unknown API error" );
  }

  cache.set( url.href, json );
  return json;
}


/**
 * Clear a specific cached endpoint or everything.
 *
 * @param {string} [path] - Endpoint path. If omitted, clears all cache.
 */
export function clearCache(path) {
    if (path) {
        const url = storeConfig.buildEndpoint(path).href;
        cache.delete(url);
    } else {
        cache.clear();
    }
}
