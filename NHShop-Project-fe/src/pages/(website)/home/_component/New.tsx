import ProductList from "../../product/_component/ProductList";

const New = () => {
    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">New</h2>
                </div>
                <ProductList featured={true} />
            </div>
        </section>
    );
};

export default New;
