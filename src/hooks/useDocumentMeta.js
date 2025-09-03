import { useEffect } from "react";

export function useDocumentMeta({ title, description, image, type = "website", locale = "en_US" }) {
  const defaultTitle = "Callismart App Store";
  const defaultDescription = "Browse official Callismart plugins, themes, and apps.";
  const defaultImage = "/favicon.svg";

  useEffect(() => {
    const pageTitle = title || defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageImage =
      image && !image.startsWith("http") ? window.location.origin + image : image || window.location.origin + defaultImage;
    const pageUrl = window.location.href;

    if (pageTitle) document.title = pageTitle;

    const updateMeta = (attr, name, content) => {
      if (!content) return;

      // Remove duplicates
      const existingTags = document.querySelectorAll(`meta[${attr}="${name}"]`);
      existingTags.forEach(tag => tag.remove());

      const element = document.createElement("meta");
      element.setAttribute(attr, name);
      element.setAttribute("content", content);
      document.head.appendChild(element);
    };

    // Standard meta
    updateMeta("name", "description", pageDescription);

    // OpenGraph
    updateMeta("property", "og:title", pageTitle);
    updateMeta("property", "og:description", pageDescription);
    updateMeta("property", "og:type", type);
    updateMeta("property", "og:image", pageImage);
    updateMeta("property", "og:url", pageUrl);
    updateMeta("property", "og:locale", locale);

    // Twitter
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", pageTitle);
    updateMeta("name", "twitter:description", pageDescription);
    updateMeta("name", "twitter:image", pageImage);
    updateMeta("name", "twitter:url", pageUrl);
  }, [title, description, image, type, locale]);
}
