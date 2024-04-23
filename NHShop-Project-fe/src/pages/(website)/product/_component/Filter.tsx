const Filter = () => {
    return (
        <>
            <section className="filter">
                <div className="container">
                    <div className="filter-around">
                        <div className="filter-choose">
                            <div className="filter-choose__action">
                                <img src="/src/assets/icons/20.svg" alt="" />
                                <span className="filter__text">Filter</span>
                                <img src="/src/assets/icons/21.svg" alt="" />
                                <img src="/src/assets/icons/22.svg" alt="" />
                            </div>

                            <div className="filter-show">
                                <span className="filter-show__text">
                                    Showing 1-16 of 32 results
                                </span>
                            </div>
                        </div>
                        <div className="filter-search">
                            <div className="filter-search__show">
                                <span className="filter__text">Show</span>
                                <input
                                    type="text"
                                    placeholder={"16"}
                                    className="filter__input-small"
                                />
                                <span className="filter__text">Short by</span>
                                <input
                                    type="text"
                                    placeholder="Default"
                                    className="filter__input-big"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Filter;
