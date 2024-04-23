import Banner from "../home/_component/Banner";
import Services from "../home/_component/Services";
import Filter from "./_component/Filter";
import PageNumber from "./_component/PageNumber";
import ProductList from "./_component/ProductList";

const ShopPage = () => {
    return (
        <>
            <Banner />
            <Filter />
            {/* <Categories /> */}
            <section className="shop">
                <div className="container">
                    <ProductList />
                </div>
            </section>
            <PageNumber />
            <Services />
        </>
    );
};

export default ShopPage;
