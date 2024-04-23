import { BannerImg } from "@/components/icons";

const Banner = () => {
    return (
        <>
            <section className="banner">
                <img src={BannerImg} alt="" className="banner__img" />
            </section>
        </>
    );
};

export default Banner;
