export function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <div className="banner__content">
          <h2 className="banner__title title">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="banner__desc desc">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="banner__btn btn btn--primary">Shop Now</button>
          <ul className="info">
            <li className="info__box">
              <div className="info__item">
                <p className="info__head">200+</p>
                <p className="info__desc desc">International Brands</p>
              </div>
            </li>
            <li className="info__box info__box--line">
              <div className="info__item">
                <p className="info__head">2,000+</p>
                <p className="info__desc desc">High-Quality Products</p>
              </div>
            </li>
            <li className="info__box">
              <div className="info__item">
                <p className="info__head">30,000+</p>
                <p className="info__desc desc">Happy Customers</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="banner__img">
          <img
            className="banner__img-left"
            src="./assets/images/banners/star.png"
            alt="star"
          />
          <img
            className="banner__img-right"
            src="./assets/images/banners/start-right.png"
            alt="start-right"
          />
        </div>
      </div>
    </section>
  );
}
