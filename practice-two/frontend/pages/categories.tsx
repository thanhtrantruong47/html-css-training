import Link from "next/link";
import { useRouter } from "next/router";
import { Footer, Header, SignUpNotification } from "../components";
import CategoriesFilter from "../components/categories/filters";

export const getProducts = async ({ offset, limit, ordering }) => {
  const products = await fetch(
    `http://localhost:8000/products/?offset=${offset}&limit=${limit}&ordering=${ordering}`
  );
  return products.json();
};

export const getServerSideProps = async ({
  query: { page = 1, limit = 9, ordering = "-number_of_purchases" },
}) => {
  const offset = (page - 1) * limit;
  const products = await getProducts({ offset, limit, ordering });
  return { props: { products } };
};

export default function Categories({ products }) {
  const router = useRouter();

  const page = Number(router.query.page ?? 1);
  const limit = Number(router.query.limit ?? 9);

  const sortProduct = (event) => {
    router.push({
      query: {
        ...router.query,
        ordering: event.target.value,
      },
    });
  };

  const prevPagination = () => {
    router.push({
      query: {
        ...router.query,
        page: Math.max(page - 1, 1),
      },
    });
  };

  const nextPagination = () => {
    router.push({
      query: {
        ...router.query,
        page: page + 1,
      },
    });
  };

  const selectPagination = (event) => {
    router.push({
      query: {
        ...router.query,
        page: Number(event.target.value),
      },
    });
  };

  return (
    <>
      <SignUpNotification />
      <Header />

      <div className="container">
        <aside className="sidebar">
          <div className="sidebar__wrapper">
            <p>Home</p>
            <p></p>
            <p>Shop</p>
            <p></p>
            <p>Men</p>
            <p></p>
            <p className="sidebar__item">T-Shirt</p>
          </div>
        </aside>

        <div className="ctg">
          <CategoriesFilter />

          <section className="arrival-ctg">
            <div className="ctg__head">
              <h2 className="ctg__title">Casual</h2>
              <div className="ctg__head-desc">
                <p className="ctg__desc desc">
                  Showing {(page - 1) * limit + 1}-{page * limit} of{" "}
                  {products.count} Products
                </p>
                <div className="ctg__select">
                  <p className="ctg__desc desc">Sort by: </p>
                  <select
                    className="btn ctg__select-list"
                    name=""
                    id=""
                    onChange={sortProduct}
                  >
                    <option value="-number_of_purchases">Most Popular</option>
                    <option value="-created">Newest</option>
                    <option value="created">Oldest</option>
                  </select>
                </div>
              </div>
              <p
                className="icon-ctg"
                style={{ fontSize: "30px", cursor: "pointer" }}
                onclick="openNav()"
              ></p>
            </div>
            <div className="ctg__product">
              {products?.results.map((product) => {
                const fullStarCount = Math.floor(product.rating);
                const halfStarCount = Math.round(
                  (Number(product.rating) - fullStarCount) * 2
                );

                return (
                  <div
                    className="arrival__product product-ctg"
                    key={product.id}
                  >
                    <Link href={"/products/" + product.id}>
                      <img
                        className="product__img"
                        src={product.image}
                        alt="tapede-tails"
                      />
                    </Link>
                    <p className="product__name">{product.title}</p>
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
                                key={product.id + "-" + index}
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
                        {Number(product.rating).toFixed(1)}/
                        <span className="product__feedback-score-max">5</span>
                      </p>
                    </div>
                    <div className="product__price">
                      <p className="price">&#36;{product.price / 100}</p>
                      {product.origin_price && (
                        <>
                          <p className="price price--sell">
                            &#36;{product.origin_price / 100}
                          </p>
                          <p className="price price--precent">
                            -
                            {Number(
                              100 - (product.price / product.origin_price) * 100
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
            <div className="ctg__control">
              <button
                className="ctg__btn"
                onClick={prevPagination}
                disabled={Number(page) === 1}
              >
                <a className="icon-ctg-next" href=""></a>
                Previous
              </button>
              <div className="list-page">
                {Array(5)
                  .fill(Math.max(page - 2, 1))
                  .map((value, index) => value + index)
                  .map((pageIndex) => {
                    return (
                      <button
                        className="list-page__btn"
                        key={pageIndex}
                        value={pageIndex}
                        onClick={selectPagination}
                      >
                        {pageIndex}
                      </button>
                    );
                  })}
              </div>
              <button
                className="ctg__btn"
                onClick={nextPagination}
                disabled={page * limit >= products.count}
              >
                Next
                <a className="icon-ctg-prev" href=""></a>
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
