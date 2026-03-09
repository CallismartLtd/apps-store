import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { Error as AppError } from "../components/Error/Error";
import { useFetch } from "../hooks/useFetch";
import SingleApp from "../components/SingleApp/SingleApp";
import { storeConfig } from "../../config";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { reportError } from "../utils/api";

/**
 * The single theme information page.
 *
 * @returns {JSX.Element}
 */
export default function Theme() {
    const { slug } = useParams();

    const { data, loading, error, refetch } = useFetch({
        path: "theme-info",
        params: { slug }
    });

    const theme = data || null;
    
    useDocumentMeta({
        title: `${theme?.name ?? 'Please wait...' } – ${storeConfig.appName}`,
        description: theme?.short_description ?? 'Please wait',
        image: theme?.banners?.high,
        type: "article",
    });


    if (loading) return <Loading variant="single" />;
    if (error) return <AppError error={error} onRetry={refetch} onReport={reportError} />;
    if (!theme) return <AppError error="Theme not found" onReport={reportError} />;

    return <SingleApp app={theme} />;
}
