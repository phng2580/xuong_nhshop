import Banner from "./_component/Banner";
import Blog from "./_component/Blog";
import New from "./_component/New";
import Services from "./_component/Services";
import Shop from "./_component/Shop";

const HomePage = () => {
    return (
        <>
            <Banner />
            <New />
            <Shop />
            <Blog />
            <Services />
        </>
    );
};

export default HomePage;
