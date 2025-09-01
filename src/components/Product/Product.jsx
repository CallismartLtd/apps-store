import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://callismart.com.ng/wp-json/wc/store/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-page">

      {/* TOP SECTION */}
      <div className="product-top">
        {/* LEFT COLUMN: Main Image */}
        <div className="product-image">
          <img
            src={product.images[0]?.src}
            alt={product.name}
            className="main-image"
          />
        </div>

        {/* RIGHT COLUMN: Info */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <p
            className="product-price"
            dangerouslySetInnerHTML={{ __html: product.price_html }}
          />

          {product.short_description && (
            <p
              className="product-short-desc"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          {/* Rating & Review Count */}
          <div className="product-rating">
            ⭐ {product.average_rating || "0.0"} / 5
            <span className="review-count">
              ({product.review_count} reviews)
            </span>
          </div>

          {/* BUTTONS */}
          <div className="buttons-container">
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
            <button className="share-btn">Share</button>
          </div>
        </div>
      </div>

      {/* ABOUT THIS APP SECTION */}
      <div className="product-description-section">
        <h2>About this App</h2>
        <div
          className="product-description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>

      {/* FUTURE SECTIONS */}
      {/* Reviews will go here later */}
    </div>
  );
}
