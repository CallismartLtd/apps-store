import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { Error as AppError } from "../components/Error/Error";
import { useFetch } from "../hooks/useFetch";
import SingleApp from "../components/SingleApp/SingleApp";
import { storeConfig } from "../../config";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { reportError } from "../utils/api";

/**
 * The single plugin information page.
 *
 * @returns {JSX.Element}
 */
export default function Plugin() {
    const { slug } = useParams();

    const { data, loading, error, refetch } = useFetch({
        path: "plugin-info",
        params: { slug }
    });

    const plugin = data || null;
    
    useDocumentMeta({
        title: `${plugin?.name ?? 'Please wait...' } – ${storeConfig.appName}`,
        description: plugin?.short_description ?? 'Please wait',
        image: plugin?.banners?.high,
        type: "article",
    });


    if (loading) return <Loading variant="single" />;
    if (error) return <AppError error={error} onRetry={refetch} onReport={reportError} />;
    if (!plugin) return <AppError error="Plugin not found" onReport={reportError} />;

    return <SingleApp app={plugin} />;
}
