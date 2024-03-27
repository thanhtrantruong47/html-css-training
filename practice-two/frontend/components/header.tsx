export function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <a
            className="navbar__nav icon-nav"
            aria-label="icon-nav"
            href="#"
          ></a>
          <h1>
            <a className="sign-up__link" href="product.html">
              <img
                className="navbar__logo"
                src="/assets/images/headers/shopco.png"
                alt="shopco"
              />
            </a>
          </h1>
          <ul className="navbar__list">
            <li>
              <a className="link" href="category.html">
                Shop
              </a>
            </li>
            <li>
              <a className="link" href="#">
                On Sale
              </a>
            </li>
            <li>
              <a className="link" href="#">
                New Arrivals
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Brand
              </a>
            </li>
          </ul>
          <form action="index.html">
            <input
              className="navbar__search"
              type="text"
              name="search"
              maxLength={20}
              placeholder="Search for products..."
            />
          </form>
          <div className="navbar__option icon">
            <a
              className="link icon-search"
              aria-label="icon-search"
              href="#"
            ></a>
            <a
              className="link icon-cart"
              aria-label="icon-cart"
              href="/cart"
            ></a>
            <a className="link icon-login" aria-label="icon-login" href="#"></a>
          </div>
        </nav>
      </header>
    </>
  );
}
