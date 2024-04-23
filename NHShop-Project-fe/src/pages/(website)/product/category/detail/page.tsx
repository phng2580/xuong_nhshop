import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductList from "../../_component/ProductList";
import Banner from "@/pages/(website)/home/_component/Banner";
import Filter from "../../_component/Filter";

const CategoryDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["CATEGORY_DETAIL", id],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/categories/${id}`
            );
            return data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Banner />
            <Filter />
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title">
                            {data.category.name}
                        </h2>
                    </div>
                    <ProductList data={data.product} />
                </div>
            </section>
        </>
    );
};

export default CategoryDetail;
