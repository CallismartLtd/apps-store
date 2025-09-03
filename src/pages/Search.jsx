import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import { Error as AppError } from "../components/Error/Error";
import HomeCard from "../components/Home/HomeCard";
import { useFetch } from "../hooks/useFetch";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { reportError } from "../utils/api";
import { useLocation } from "react-router-dom";
import StringUtils from "../utils/formater";
import SearchNotFound from "../components/SearchNotFound/SearchNotFound";

/**
 * Callismart App Store Search page.
 *
 * @returns {JSX.Element}
 */
export default function Search() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const param = new URLSearchParams(location.search);

  useEffect(() => {
    const queryVars = param.get("q")?.trim();
    if (queryVars && queryVars !== searchTerm) {
      setSearchTerm(queryVars);
    }
  }, [location.search, searchTerm]);

  const title = searchTerm
    ? `Results for: "${StringUtils.ucwords(searchTerm)}"`
    : "Search Apps";

  useDocumentMeta({
    title,
    description: "Search your favourite plugins, themes, and apps.",
    image: "/favicon.svg",
  });

  const { data, loading, error, refetch } = useFetch({
    path: "repository",
    params: { search: searchTerm, limit: param.get( 'limit' ), page: param.get( 'page' ) },
  });

  const apps = data?.apps || [];
  const pagination = data?.pagination;

  if (loading) return <Loading variant="grid" />;
  if (error) return <AppError error={error} onRetry={refetch} onReport={reportError} />;
  if (!apps.length) return <SearchNotFound term={searchTerm} />;

  return <HomeCard apps={apps} title={title} pagination={pagination} />

}
