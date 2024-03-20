import React from "react";
import styles from '../account/Conta.module.css'
import HeaderAccount from "./HeaderAccount";
import { Routes, Route } from "react-router-dom";
import Feed from "./Feed/Feed";
import PhotoPost from "./Feed/PhotoPost";
import Stats from "./Feed/Stats";
import NotFound from "./NotFound";
import Head from "../../Helper/Head";
import { UserContext } from "../../Hooks/UserContext";

const Conta = () => {
  const {data} = React.useContext(UserContext);

  return(
    <section className={styles.container}>
      <Head title='Minha conta'/>
      <HeaderAccount/>
      <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='postar' element={<PhotoPost/>}/>
          <Route path='estatisticas' element={<Stats/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </section>
  )
}

export default Conta;
