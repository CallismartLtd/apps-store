// src/utils/priceHelper.jsx
import StringUtils from "./formater";

export function renderPriceHtml(product, currency, billingCycle) {
  const price = StringUtils.formatCurrency(
    product.pricing.price,
    currency
  );

  if (product.pricing.is_on_sale) {
    const regularPrice = StringUtils.formatCurrency(
      product.pricing.regular_price,
      currency
    );
    return (
      <span className="price-wrapper">
        <del className="regular-price">{regularPrice}</del>{" "}
        <span className="sale-price">{price}</span>
        <span className="billing-cycle">/ {billingCycle.toLowerCase()}</span>
      </span>
    );
  }

  return (
    <span className="price-wrapper">
      <span className="normal-price">{price}</span>
      <span className="billing-cycle">/ {billingCycle.toLowerCase()}</span>
    </span>
  );
}
