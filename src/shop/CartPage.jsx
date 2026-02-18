import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  // fetch cart item from local storage
  useEffect(() => {
    let storedcartItems;
    try {
      storedcartItems = JSON.parse(localStorage.getItem("cart"));
      if (!Array.isArray(storedcartItems)) {
        storedcartItems = [];
      }
    } catch (e) {
      storedcartItems = [];
    }
    setcartItems(storedcartItems);
  });

  // calculate price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // handle quantity increase
  const handleincrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // update local storage storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle quantity decrease
  const handledecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);
    }

    // update local storage storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((cartitem) => cartitem.id !== item.id);

    // update new cart
    setcartItems(updateCart);
    updateLocalStorage(updateCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // order total
  const orderTotal = cartSubtotal + (cartSubtotal*0.1);
  return (
    <div>
      <PageHeader title={"Shop Cart"} currPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Qunatity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handledecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleincrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart top ends */}
            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    className="cart-page-input-text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code ...."
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value={"Update Cart"} />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>

              {/* checkout box end */}
              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option>Select Country...</option>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="bg">bangladesh </option>
                          <option value="pk">Pakistan</option>
                          <option value="ind">India</option>
                          <option value="us">United States (USA)</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option>Select City...</option>
                          <option value="uk">London</option>
                          <option value="bg">Dhaka</option>
                          <option value="pk">Karachi</option>
                          <option value="ind">Dehli</option>
                          <option value="us">New York</option>
                          <option value="np">Kathmandu</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Postal/ZIP *"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Total</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">${cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">${cartSubtotal * 0.1}</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total Cost</span>
                          <p className="pull-right">${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
