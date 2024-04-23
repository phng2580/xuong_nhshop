import { Link } from "react-router-dom";
import { CartIcon, Logo, SearchIcon, UserIcon, WishlistIcon } from "./icons";
import HeaderTest from "./HeaderTest";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to={"/"} className="header__logo">
                        <img src={Logo} alt="" />
                    </Link>
                    <div className="button-mobile">
                        <button>=</button>
                    </div>
                    <nav className="main-menu">
                        {/* <ul className="main-menu__list">
                            <li className="main-menu__item">
                                <Link to={"/"} className="main-menu__link">
                                    Home
                                </Link>
                            </li>
                            <li className="main-menu__item">
                                <Link to={"/shop"} className="main-menu__link">
                                    Shop
                                </Link>
                            </li>
                            <li className="main-menu__item">
                                <a className="main-menu__link">About</a>
                            </li>
                            <li className="main-menu__item">
                                <a className="main-menu__link">Contact</a>
                            </li>
                        </ul> */}
                        <HeaderTest />
                    </nav>
                    <div className="header-items">
                        <div className="header-item-user">
                            <span>
                                <Link to={"/sign-up"}>
                                    <img src={UserIcon} alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <img src={SearchIcon} alt="" />
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <img src={WishlistIcon} alt="" />
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <Link to={"/cart"}>
                                    <img src={CartIcon} alt="" />
                                </Link>
                            </span>
                        </div>
                        <div className="header-item-user">
                            <span>
                                <UserButton />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
