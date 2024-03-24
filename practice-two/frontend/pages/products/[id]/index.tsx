import { useState } from "react";
import { Footer, Header, SignUpNotification } from "../../../components";
import { AlsoLike } from "../../../components/also-like";

export const getProductDetail = async (id) => {
  const product = await fetch(`http://localhost:8000/products/${id}/`);
  return product.json();
};

export const getProductReviews = async (id) => {
  const reviews = await fetch(`http://localhost:8000/products/${id}/reviews/`);
  return reviews.json();
};

export const getNewArrivals = async () => {
  const arrivals = await fetch(
    "http://localhost:8000/products/?limit=4&ordering=-created_at"
  );
  return arrivals.json();
};

export const getStaticProps = async ({ params }) => {
  const product = await getProductDetail(params.id);
  const reviews = await getProductReviews(params.id);
  const arrivals = await getNewArrivals();

  return { props: { product, reviews, arrivals } };
};

export async function getStaticPaths() {
  const request = await fetch(`http://localhost:8000/products/`);
  const data = await request.json();

  const paths = data.results?.map((product) => ({
    params: { id: String(product.id) },
  }));

  return { paths, fallback: false };
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function Product({ product, reviews, arrivals }) {
  const [amountOfProduct, setAmountOfProduct] = useState(1);

  const fullStarCount = Math.floor(product.rating);
  const halfStarCount = Math.round(
    (Number(product.rating) - fullStarCount) * 2
  );

  const increment = () => {
    setAmountOfProduct(amountOfProduct + 1);
  };

  const decrement = () => {
    setAmountOfProduct(Math.max(amountOfProduct - 1, 0));
  };

  return (
    <>
      <SignUpNotification />
      <Header />

      <section className="container">
        <aside className="sidebar">
          <div className="sidebar__wrapper">
            <p>Home</p>
            <p>{">"}</p>
            <p>Shop</p>
            <p>{">"}</p>
            <p>Men</p>
            <p>{">"}</p>
            <p className="sidebar__item">T-Shirt</p>
          </div>
        </aside>
        <div className="detail">
          <div className="detail__img">
            <div className="detail__img-list">
              <img
                className="img"
                src="../assets/images/details/image 2.svg"
                alt=""
              />
              <img
                className="img"
                src="../assets/images/details/image 5 (1).png"
                alt=""
              />
              <img
                className="img"
                src="../assets/images/details/image 6 (1).png"
                alt=""
              />
            </div>
            <img className="img img-detail" src={product.image} alt="" />
          </div>
          <div className="detail__wrapper">
            <h1 className="detail__title title">{product.title}</h1>
            <div className="detail__evalute">
              <div className="product__evaluate evaluate-detail">
                {Array(fullStarCount)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <img
                        className="evaluate-detail__img"
                        src="../assets/images/products/star-full.svg"
                        alt="star-full"
                        key={index}
                      />
                    );
                  })}
                {!!halfStarCount && (
                  <img
                    className="evaluate-detail__img--half"
                    src="../assets/images/products/star-half.svg"
                    alt="star-full"
                  />
                )}
              </div>
              <p className="product__feedback-score">
                {Number(product.rating).toFixed(1)}/
                <span className="product__feedback-score-max">5</span>
              </p>
            </div>
            <div className="detail__price price">
              <p className="price">&#36;{product.price / 100}</p>
              {product.origin_price && (
                <>
                  <p className="price price--sell">
                    &#36;{product.origin_price / 100}
                  </p>
                  <p className="price price--precent desc-small">
                    -
                    {Number(
                      100 - (product.price / product.origin_price) * 100
                    ).toFixed(2)}
                    %
                  </p>
                </>
              )}
            </div>
            <p className="detail__desc desc">{product.description}</p>
            <div className="detail__color">
              <p className="desc">Select Color</p>
              <form className="detail__color-group" action="">
                {product.colors.map((color, index) => {
                  return (
                    <input
                      type="radio"
                      id={"radio" + index}
                      name={"radio" + index}
                      style={{ backgroundColor: color }}
                      key={"radio" + index}
                    />
                  );
                })}
              </form>
            </div>
            <div className="detail__choose">
              <p className="desc">Choose Size</p>
              <div className="choose__list">
                {product.sizes.map((size, index) => {
                  return (
                    <button
                      className="detail__btn btn btn--secondary"
                      key={"size" + index}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="detail__add">
              <div className="wrapper">
                <span className="minus icon-span" onClick={decrement}></span>
                <span className="num">{amountOfProduct}</span>
                <span className="plus icon-plus" onClick={increment}></span>
              </div>
              <button className="detail__number-num btn btn--primary">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="detail__action">
            <button className="detail__item desc">Product Details</button>
            <a className="desc detail__item detail__item--center">
              Rating & Reviews
            </a>
            <a className="detail__item detail__item--right desc"> FAQs </a>
          </div>
        </div>
        <div className="detail-option">
          <div className="option-info">
            <p>All Review</p>
            <p className="option-info__num desc">(451)</p>
          </div>
          <div className="option-choose">
            <img src="./assets/images/details/Frame 19.svg" alt="" />
            <select className="option-choose__select btn" name="" id="">
              <option value="">later</option>
              <option value="">new</option>
            </select>
            <button className="option-choose__btn btn">Write a Review</button>
          </div>
        </div>
        <div className="detail-info">
          {reviews?.map((review) => {
            const fullStarCount = Math.floor(review.rating);
            const halfStarCount = Math.round(
              (Number(review.rating) - fullStarCount) * 2
            );

            return (
              <div className="comment" key={"review" + review.id}>
                <div className="comment__feedback evaluate-comment">
                  {Array(fullStarCount)
                    .fill(0)
                    .map((_, index) => {
                      return (
                        <img
                          className="evaluate-comment__img"
                          src="../assets/images/products/star-full.svg"
                          alt="star-full"
                          key={"rating" + review.id + "-" + index}
                        />
                      );
                    })}
                  {!!halfStarCount && (
                    <img
                      className="evaluate-comment__img evaluate-comment__img--half"
                      src="../assets/images/products/star-half.svg"
                      alt="star-full"
                    />
                  )}
                </div>
                <div className="comment__name">
                  <p>{review.user.fullname}</p>
                  <img
                    className="comment__img"
                    src="../assets/images/comments/blue-check-mark.svg"
                    alt="blue-check-mark"
                  />
                </div>
                <p className="comment__desc desc">”{review.content}”</p>
                <p className="comment__date desc">
                  Posted on{" "}
                  {new Date(review.created).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="detail__btn-product">
        <button className="detail__btn detail__btn--large btn btn--secondary">
          Load More Reviews
        </button>
      </div>

      <AlsoLike items={arrivals} />

      <Footer />
    </>
  );
}
