"use client";

import { useEffect, useState } from "react";
import { Footer, Header, SignUpNotification } from "../components";
import { useRouter } from "next/router";
import axios from "axios";

export default function Cart() {
  const router = useRouter();

  const [productsInCart, setProductsInCart] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(1500);

  console.log("-- productsInCart: ", productsInCart);

  useEffect(() => {
    const productsInCart = JSON.parse(
      localStorage.getItem("productsInCart") || "[]"
    );
    setProductsInCart(productsInCart);
  }, []);

  const totalPrice = productsInCart.reduce(
    (prev, current) => prev + current?.product.price,
    0
  );

  const onOrder = async () => {
    const response = await axios.post(
      "http://localhost:8000/order/",
      productsInCart,
      { headers: { Authorization: localStorage.getItem("token") } }
    );

    if (response.status === 200) {
      router.push("/");
    } else {
      alert(response.data.detail);
    }

    alert("Order success");
    router.push("/");
  };

  return (
    <>
      <SignUpNotification />

      <Header />

      <div className="container">
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
        <h2 className="cart__title title">YOUR CART</h2>
        <div className="cart">
          <div className="your-cart">
            {productsInCart.map((product) => {
              return (
                <div className="arrival__product product-cart" key={product.id}>
                  <img
                    className="product__img cart__img"
                    src={product?.product.image}
                    alt="tapede-tails"
                  />
                  <div className="cart__detail">
                    <div className="cart__info">
                      <div className="cart__name">
                        <p className="product__name">
                          {product?.product.title}
                        </p>
                        <div className="cart__info-inline">
                          <p className="cart__info-desc">Size:</p>
                          <p className="desc cart__info-desc">
                            {product?.size}
                          </p>
                        </div>
                      </div>
                      <a className="icon-delete"></a>
                    </div>
                    <div className="cart__price">
                      <div className="product__price price">
                        <p>&#36;{product?.product.price / 100}</p>
                      </div>
                      <div className="wrapper-cart">
                        <span className="minus icon-span-cart"></span>
                        <span className="num">{product?.amount}</span>
                        <span className="plus icon-plus-cart"></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="checkout">
            <h3 className="checkout__title product__price price">
              Order Summary
            </h3>
            <table className="checkout__tbl">
              <tbody>
                <tr>
                  <td className="desc checkout__tbl-item">Subtotal</td>
                  <td className="checkout__tbl-right ">${totalPrice / 100}</td>
                </tr>
                <tr>
                  <td className="desc checkout__tbl-item">Discount (0%)</td>
                  <td className="checkout__tbl-right  price--cart">$0</td>
                </tr>
                <tr>
                  <td className="desc checkout__tbl-item">Delivery Fee</td>
                  <td className="checkout__tbl-right">${deliveryFee / 100}</td>
                </tr>
                <tr className="checkout__tbl-bot">
                  <td className="checkout__tbl-item">Total</td>
                  <td className="checkout__tbl-right checkout__tbl-price">
                    ${(totalPrice + deliveryFee) / 100}
                  </td>
                </tr>
              </tbody>
            </table>
            <form className="checkout__box" action="">
              <input
                className="checkout__promo"
                type="text"
                maxLength={20}
                placeholder="Add promo code"
              />
              <button className="btn btn--primary checkout__btn-apply">
                Apply
              </button>
            </form>
            <button
              className="btn btn--primary checkout__btn-checkout"
              onClick={onOrder}
            >
              Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
