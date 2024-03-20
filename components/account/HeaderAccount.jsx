import React from "react";
import HeaderNavAccount from "./HeaderNavAccount";
import styles from "../account/Conta.module.css";
import { useLocation } from "react-router-dom";

const HeaderAccount = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation(); //sempre que a localizaçao mudar

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <HeaderNavAccount/>
    </header>
  )
};

export default HeaderAccount;
