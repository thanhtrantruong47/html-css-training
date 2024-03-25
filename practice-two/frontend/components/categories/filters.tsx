export default function CategoriesFilter() {
  return (
    <article id="mySidenav" className="sidebar-ctg">
      <div className="sidebar-ctg__fill">
        <p className="">Filters</p>
        <a className="icon-filter" href=""></a>
        <a
          href="#"
          className="icon-close sidebar-ctg-a"
          //   onclick="closeNav()"
        >
          &times;
        </a>
      </div>
      <div className="sidebar-ctg__list">
        <div className="sidebar-ctg__list-item">
          <p className="desc">T-Shirts</p>
          <a className="icon-right" href=""></a>
        </div>
        <div className="sidebar-ctg__list-item">
          <p className="desc">Shorts</p>
          <a className="icon-right" href=""></a>
        </div>
        <div className="sidebar-ctg__list-item">
          <p className="desc">Shirts</p>
          <a className="icon-right" href=""></a>
        </div>
        <div className="sidebar-ctg__list-item">
          <p className="desc">Hoodie</p>
          <a className="icon-right" href=""></a>
        </div>
        <div className="sidebar-ctg__list-item">
          <p className="desc">Jeans</p>
          <a className="icon-right" href=""></a>
        </div>
      </div>
      <div className="sidebar-ctg__price">
        <div className="sidebar-ctg__price-head sidebar-ctg__list-item">
          <p className="sidebar-ctg__price-title">Price</p>
          <a className="icon-up" href=""></a>
        </div>
        <div>
          <input
            type="range"
            value="24"
            min="1"
            max="999"
            // oninput="this.nextElementSibling.value = this.value"
          />
          <output className="sidebar-ctg__range">24</output>
          <p className="dola">$</p>
        </div>
      </div>
      <div className="sidebar-ctg__color">
        <p className="sidebar-ctg__color-title">Color</p>
        <form className="sidebar-ctg__color-group" action="">
          <input type="radio" id="radio01" name="radio" />
          <input type="radio" id="radio02" name="radio" />
          <input type="radio" id="radio02" name="radio" />
          <input type="radio" id="radio01" name="radio" />
          <input type="radio" id="radio02" name="radio" />
          <input type="radio" id="radio02" name="radio" />
          <input type="radio" id="radio01" name="radio" />
          <input type="radio" id="radio02" name="radio" />
          <input type="radio" id="radio02" name="radio" />
        </form>
      </div>
      <div className="sidebar-ctg__size">
        <div className="sidebar-ctg__price-head sidebar-ctg__list-item">
          <p className="sidebar-ctg__price-title">Size</p>
          <a className="icon-up" href=""></a>
        </div>
        <div className="sidebar-ctg__size-list">
          <button className="detail__btn btn btn--secondary">XX-Small</button>
          <button className="detail__btn btn btn--secondary">X-Small</button>
          <button className="detail__btn btn btn--secondary">Small</button>
          <button className="detail__btn btn btn--secondary">Medium</button>
          <button className="detail__btn btn btn--secondary">Large</button>
          <button className="detail__btn btn btn--secondary">X-Large</button>
          <button className="detail__btn btn btn--secondary">XX-Large</button>
          <button className="detail__btn btn btn--secondary">3X-Large</button>
          <button className="detail__btn btn btn--secondary">4X-Large</button>
        </div>
      </div>
      <div className="sidebar-ctg__dress">
        <div className="sidebar-ctg__price-head sidebar-ctg__list-item">
          <p className="sidebar-ctg__price-title">Dress style</p>
          <a className="icon-up" href=""></a>
        </div>
        <div className="sidebar-ctg__list sidebar-ctg__dress-list">
          <div className="sidebar-ctg__list-item">
            <p className="desc">Casual</p>
            <a className="icon-right" href=""></a>
          </div>
          <div className="sidebar-ctg__list-item">
            <p className="desc">Formal</p>
            <a className="icon-right" href=""></a>
          </div>
          <div className="sidebar-ctg__list-item">
            <p className="desc">Party</p>
            <a className="icon-right" href=""></a>
          </div>
          <div className="sidebar-ctg__list-item">
            <p className="desc">Gym</p>
            <a className="icon-right" href=""></a>
          </div>
        </div>
        <button className="detail__number-num btn btn--primary">
          Apply Filter
        </button>
      </div>
    </article>
  );
}
