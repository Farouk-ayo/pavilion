import menu from "../assets/menu.png";
import notification from "../assets/notification.png";
import profile from "../assets/Profile.jpg";
import "./ui.scss";
import SearchInput from "../components/Search";

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
