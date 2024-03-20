import React from "react";
import styles from "./Dogs.module.css";
import { Link} from "react-router-dom";
import Dogs from "../img/svg/Dogs.svg?react";
import { UserContext } from "../Hooks/UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {" "}
        {/*combina a classe nav do módulo de estilos styles com a classe container*/}
        <ul>
          <li>
            <Link to="/" aria-label="Dogs - Home" className={styles.link}>
              <Dogs />
            </Link>
          </li>
          <li>
            {data ? (
              <Link to="/conta" className={`${styles.link} ${styles.login}` }>
                {data.nome}
              </Link>
            ) : (
              <Link to="/login" className={`${styles.link} ${styles.login}`}>
                Login / Criar
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
