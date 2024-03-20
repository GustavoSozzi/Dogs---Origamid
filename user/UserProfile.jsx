import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../components/account/Feed/Feed";
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className={`${styles.container} mainSection`}>
      <h1 className="title">{user}</h1>
      <Feed user={user}/>
    </section>
  );
};

export default UserProfile;
