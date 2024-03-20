import React from "react";
import Feed from "./account/Feed/Feed";
import styles from "./Home.module.css";
import Head from "../Helper/Head";

const Home = () => {
  return (
    <section className={`${styles.container} mainContainer`}>
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
