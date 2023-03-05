import menu from "../assets/menu.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/Profile.svg";
import "./Header.scss";
import SearchInput from "./Search";

const Header = () => {
  return (
    <section className="header">
      <div>
        <img src={menu} alt="" />
        <h1 className="logo">Pavilion</h1>
        <SearchInput />
      </div>
      <div>
        <img src={notification} alt="" />
        <img src={profile} alt="" />
      </div>
    </section>
  );
};

export default Header;
