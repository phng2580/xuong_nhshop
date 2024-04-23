import Banner from "../home/_component/Banner";

const OrderPage = () => {
    return (
        <>
            <Banner />
            <div className="checkout">
                <div className="container">
                    <h2 className="checkout-title">Billing details</h2>
                    <div className="checkout-around">
                        <form className="checkout-form">
                            <div className="checkout-form__name">
                                <div className="checkout-form__firstname">
                                    <label
                                        htmlFor=""
                                        className="checkout-form__label"
                                    >
                                        First Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="checkout-form__input"
                                        placeholder="First Name..."
                                    />
                                </div>
                                <div className="checkout-form__lastname">
                                    <label
                                        htmlFor=""
                                        className="checkout-form__label"
                                    >
                                        Last Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="checkout-form__input"
                                        placeholder="Last Name..."
                                    />
                                </div>
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Company Name (Optional):
                                </label>
                                <input
                                    type="text"
                                    className="checkout-form__input"
                                    placeholder="Company Name (Optional)..."
                                />
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Country / Region:
                                </label>
                                <select
                                    className="checkout-form__input"
                                    title="Select an option"
                                >
                                    <option value={0}>Hà Nội</option>
                                    <option value={1}>TP. Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Street address:
                                </label>
                                <input
                                    type="text"
                                    className="checkout-form__input"
                                    placeholder="Street address..."
                                />
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Town / City:
                                </label>
                                <input
                                    type="text"
                                    className="checkout-form__input"
                                    placeholder="Town / City..."
                                />
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Province:
                                </label>
                                <select
                                    className="checkout-form__input"
                                    title="Select an option"
                                >
                                    <option value={0}>Hoài Đức</option>
                                    <option value={1}>Long Biên</option>
                                </select>
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    ZIP code:
                                </label>
                                <input
                                    type="text"
                                    className="checkout-form__input"
                                    placeholder="ZIP code..."
                                />
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Phone:
                                </label>
                                <input
                                    type="text"
                                    className="checkout-form__input"
                                    placeholder="Phone..."
                                />
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                >
                                    Email address:
                                </label>
                                <input
                                    type="email"
                                    className="checkout-form__input"
                                    placeholder="Email address..."
                                />
                            </div>
                            <div className="checkout-form__item">
                                <label
                                    htmlFor=""
                                    className="checkout-form__label"
                                />
                                <textarea
                                    cols={30}
                                    className="checkout-form__input"
                                    rows={10}
                                    placeholder="Additional information..."
                                    defaultValue={""}
                                />
                            </div>
                        </form>
                        <div className="checkout-detail">
                            <div className="checkout-detail__header">
                                <ul>
                                    <li>Product</li>
                                    <li>Asgaard sofa x 1</li>
                                    <li>Subtotal</li>
                                    <li>Total</li>
                                </ul>
                                <ul>
                                    <li>Subtotal</li>
                                    <li>25.000.000đ</li>
                                    <li>25.000.000đ</li>
                                    <li className="total-price">25.000.000đ</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="checkout-detail__body">
                                <input
                                    type="radio"
                                    className="checkout-detail__radio"
                                    name="checkout"
                                />
                                <label htmlFor="">Direct Bank Transfer</label>
                                <p>
                                    Make your payment directly into our bank
                                    account. Please use your Order ID as the
                                    payment reference. Your order will not be
                                    shipped until the funds have cleared in our
                                    account.
                                </p>
                                <input
                                    type="radio"
                                    className="checkout-detail__radio"
                                    name="checkout"
                                />
                                <label htmlFor="">Direct Bank Transfer</label>
                                <br />
                                <input
                                    type="radio"
                                    className="checkout-detail__radio"
                                    name="checkout"
                                />
                                <label htmlFor="">Cash On Delivery</label>
                                <p>
                                    Your personal data will be used to support
                                    your experience throughout this website, to
                                    manage access to your account, and for other
                                    purposes described in our
                                    <b> privacy policy.</b>
                                </p>
                                <button className="checkout-detail__button">
                                    Place order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderPage;
