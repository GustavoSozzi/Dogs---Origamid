import React from "react";
import { UserContext } from "../../Hooks/UserContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MinhasFotos from "../../img/svg/feed.svg?react";
import Adicionar from "../../img/svg/adicionar.svg?react";
import Estatisticas from "../../img/svg/Estatisticas.svg?react";
import Sair from "../../img/svg/Sair.svg?react";
import styles from "./HeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const HeaderNavAccount = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    //realizar o logout da conta
    userLogout();
    navigate("/login");
  }

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(null);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Postar foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default HeaderNavAccount;
