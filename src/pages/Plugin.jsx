import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { Error as AppError } from "../components/Error/Error";
import { useFetch } from "../hooks/useFetch";
import SingleApp from "../components/SingleApp/SingleApp";

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

    if (loading) return <Loading message="Loading..." />;
    if (error) return <AppError message={error} onRetry={refetch} />;
    if (!plugin) return <AppError message="Plugin not found" />;

    return <SingleApp app={plugin} />;
}
