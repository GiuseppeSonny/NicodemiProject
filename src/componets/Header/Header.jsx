import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import logoBianco from "../../assets/images/logo-bianco.png";

const Header = () => {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "Production", path: "/production" },
    { name: "Contacts", path: "/contacts" },
    { name: "Works", path: "/works" },
  ];

  return (
    <nav className={styles.navbarContainer}>
      <img className={styles.logo} src={logoBianco} alt="Logo" width={200} height={80}/>
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
