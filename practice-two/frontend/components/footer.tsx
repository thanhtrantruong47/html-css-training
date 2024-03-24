export function Footer() {
  return (
    <footer>
      <fieldset className="footer">
        <legend className="contact container">
          <h2 className="footer__title title">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form className="contact__box">
            <input
              className="contact__form"
              type="text"
              maxLength={20}
              placeholder="Enter your email address"
            />
            <button className="footer__btn btn btn--light">
              Subscribe to Newsletter
            </button>
          </form>
        </legend>
        <div className="action container">
          <div className="action__item">
            <img
              className="action__logo"
              src="./assets/images/headers/shopco.png"
              alt="shopco"
            />
            <p className="action__desc desc">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="action__social">
              <a
                className="link icon-twitter"
                aria-label="icon-twitter"
                href="javascript:void(0)"
              ></a>
              <a
                className="link icon-fb"
                aria-label="icon-fb"
                href="javascript:void(0)"
              ></a>
              <a
                className="link icon-intagram"
                aria-label="icon-intagram"
                href="javascript:void(0)"
              ></a>
              <a
                className="link icon-github"
                aria-label="icon-github"
                href="javascript:void(0)"
              ></a>
            </div>
          </div>
          <div className="action__group">
            <ul className="action__item">
              <li className="action__item-head">Company</li>
              <li>
                <a className="link" href="javascript:void(0)">
                  About
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Features
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Works
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Career
                </a>
              </li>
            </ul>
            <ul className="action__item">
              <li className="action__item-head">Help</li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Customer Support
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Delivery Details
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="action__item">
              <li className="action__item-head">FAQ</li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Account
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Orders
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Payments
                </a>
              </li>
            </ul>
            <ul className="action__item">
              <li className="action__item-head">Resources</li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Free eBooks
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Development Tutoria
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  How to - Blog
                </a>
              </li>
              <li>
                <a className="link" href="javascript:void(0)">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright container">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div>
            <img
              className="copyright__img"
              src="./assets/images/footers/visa.svg"
              alt="visa"
            />
            <img
              className="copyright__img"
              src="./assets/images/footers/master.svg"
              alt="paypal"
            />
            <img
              className="copyright__img"
              src="./assets/images/footers/paypal.svg"
              alt=""
            />
            <img
              className="copyright__img"
              src="./assets/images/footers/ip-pay.svg"
              alt=""
            />
            <img
              className="copyright__img"
              src="./assets/images/footers/g-pay.svg"
              alt=""
            />
          </div>
        </div>
      </fieldset>
    </footer>
  );
}
