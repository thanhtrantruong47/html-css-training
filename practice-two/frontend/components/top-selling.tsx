import Link from "next/link";

export function TopSelling({ items }) {
  return (
    <>
      <section className="top-selling">
        <h2 className="top-selling__title title title--primary">top selling</h2>
        <div className="top-selling__products">
          {items?.results.map((item) => {
            const fullStarCount = Math.floor(item.rating);
            const halfStarCount = Math.round(
              (Number(item.rating) - fullStarCount) * 2
            );

            return (
              <div className="arrival__product product" key={item.id}>
                <Link href={"/products/" + item.id}>
                  <img
                    className="product__img"
                    src={item.image}
                    alt="tapede-tails"
                  />
                </Link>
                <p className="product__name">{item.title}</p>
                <div className="product__feedback-wrapper">
                  <div className="product__evaluate evaluate-product">
                    {Array(fullStarCount)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <img
                            className="evaluate-product__img"
                            src="./assets/images/products/star-full.svg"
                            alt="star-full"
                            key={item.id + "-" + index}
                          />
                        );
                      })}
                    {!!halfStarCount && (
                      <img
                        className="evaluate-product__img evaluate-product__img--half"
                        src="./assets/images/products/star-half.svg"
                        alt="star-full"
                      />
                    )}
                  </div>
                  <p className="product__feedback-score">
                    {Number(item.rating).toFixed(1)}/
                    <span className="product__feedback-score-max">5</span>
                  </p>
                </div>
                <div className="product__price">
                  <p className="price">&#36;{item.price / 100}</p>
                  {item.origin_price && (
                    <>
                      <p className="price price--sell">
                        &#36;{item.origin_price / 100}
                      </p>
                      <p className="price price--precent">
                        -
                        {Number(
                          100 - (item.price / item.origin_price) * 100
                        ).toFixed(2)}
                        %
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="top-selling__box-btn">
          <button className="top-selling__btn btn btn--secondary">
            View All
          </button>
        </div>
      </section>
    </>
  );
}
