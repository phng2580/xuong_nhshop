import { ShopImg1, ShopImg2, ShopImg3, ShopImg4 } from "@/components/icons";

const Shop = () => {
    return (
        <>
            <section className="shop">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title">Shop</h2>
                    </div>
                    <div className="section-body">
                        <div className="shops">
                            <div className="shop-item">
                                <a href="" className="shop__link">
                                    <img
                                        src={ShopImg1}
                                        alt=""
                                        className="shop__image"
                                    />
                                </a>
                            </div>
                            <div className="shop-item">
                                <a href="" className="shop__link">
                                    <img
                                        src={ShopImg2}
                                        alt=""
                                        className="shop__image"
                                    />
                                </a>
                            </div>
                            <div className="shop-item">
                                <a href="" className="shop__link">
                                    <img
                                        src={ShopImg3}
                                        alt=""
                                        className="shop__image"
                                    />
                                </a>
                            </div>
                            <div className="shop-item">
                                <a href="" className="shop__link">
                                    <img
                                        src={ShopImg4}
                                        alt=""
                                        className="shop__image"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
