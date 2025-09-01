import { useEffect, useState, useRef } from "react";
import { fetchFromApi } from "../utils/api";

/**
 * Hook for fetching API data with caching and safe abort handling.
 *
 * @param {string|{path:string, params?:Object}} request - API path or config.
 * @param {boolean} useCache - Whether to use cached results.
 */
export function useFetch( request, useCache = true ) {
    const [ data, setData ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    const controllerRef = useRef( null );

    const fetchData = async ( signal ) => {
        try {
            setLoading( true );
            setError( null );

            let path, params;
            if ( typeof request === "string" ) {
                path = request;
            } else {
                path = request.path;
                params = request.params;
            }

            const result = await fetchFromApi( path, { signal, params }, useCache );

            if ( signal?.aborted || controllerRef.current?.signal !== signal ) return;

            setData( result );
        } catch ( err ) {
            if ( err.name !== "AbortError" ) {
                setError( err.message || "An error occurred" );
            }
        } finally {
            if ( signal?.aborted || controllerRef.current?.signal !== signal ) return;
            setLoading( false );
        }
    };

    useEffect( () => {
        const controller = new AbortController();
        controllerRef.current = controller;
        fetchData( controller.signal );
        return () => {
        controllerRef.current?.abort();
        controllerRef.current = null;
        };
    }, [ JSON.stringify( request ) ] ); // include params in dependency

    const refetch = () => {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;
        fetchData( controller.signal );
    };

    return { data, loading, error, refetch };
}
