import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
    const { data: categories } = useQuery({
        queryKey: ["CATEGORY_LIST"],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/categories`
            );
            return data;
        },
    });

    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">Categories</h2>
                </div>
                <div className="">
                    {categories?.map(
                        (category: { _id?: string | number; name: string }) => {
                            return (
                                <div key={category._id} className="news-item">
                                    <div className="news-info">
                                        <h3 className="news__name">
                                            <Link
                                                to={`/categories/${category._id}`}
                                            >
                                                {category.name}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Categories;
