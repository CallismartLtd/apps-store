import Loading from "../components/Loading/Loading";
import { Error as AppError } from "../components/Error/Error";
import HomeCard from "../components/Home/HomeCard";
import { useFetch } from "../hooks/useFetch";

/**
 * Callismart App Store Homepage.
 *
 * @returns {JSX.Element}
 */
export default function Homepage() {
  const { data, loading, error, refetch } = useFetch("repository");
  const apps = data?.apps || [];
  
  if (loading) return <Loading variant="grid" />;
  if (error) return <AppError message={error} onRetry={refetch} />;
  if (!apps.length) return <AppError message="No applications found" />;

  return <HomeCard apps={apps} />;
}
