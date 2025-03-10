import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import logoBianco from "../../assets/images/logo-chiaro-fondo.png";

const Header = () => {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "Produzione", path: "/production" },
    { name: "Contatti", path: "/contacts" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <nav className={styles.navbarContainer}>
      <img className={styles.logo} src={logoBianco} alt="Logo" />
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {item.name}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
