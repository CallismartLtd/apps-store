import Loading from "../components/Loading/Loading";
import { Error as AppError } from "../components/Error/Error";
import HomeCard from "../components/Home/HomeCard";
import { useFetch } from "../hooks/useFetch";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { storeConfig } from "../../config";
import { reportError } from "../utils/api";
import { useLocation } from "react-router-dom";

/**
 * Callismart App Store Homepage.
 *
 * @returns {JSX.Element}
 */
export default function Homepage() {
  useDocumentMeta({
    title: storeConfig.appName,
    description: "Browse official Callismart plugins, themes, and apps.",
    image: "/favicon.svg",
  });

  const location = useLocation();
  const search    = new URLSearchParams( location.search );

  const { data, loading, error, refetch } = useFetch({path: "repository", params: {page: search.get( 'page' ), limit: search.get( 'limit' ) } } );
  const apps = data?.apps || [];
  const pagination = data?.pagination;
  
  if (loading) return <Loading variant="grid" />;
  if (error) return <AppError error={error} onRetry={refetch} onReport={reportError} />;
  if (!apps.length) return <AppError error="No applications found" onReport={reportError} />;

  return <HomeCard apps={apps} pagination={pagination} />;
}
