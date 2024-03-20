import React from "react";
import styles from "../Login/Login.module.css";
import { Link } from "react-router-dom";
import useForm from "../Forms/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import login from "../../img/svg/login.jpg";
import { UserContext } from "../../Hooks/UserContext";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);

  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div className={styles.animeLeft}>
      <Head title='Login'/>
      <div className={`${styles.container} animeLeft`}>
        <img src={login} alt="login" className={styles.dogImage} />
        <div className={styles.formCustom}>
          <h1 className={styles.title}>Login</h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className={`${styles.form} container`}
          >
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <Error error={error} />
          </form>
          <div className={styles.cadastro}>
            <Link className={styles.subtitle} to="/login/register">
              Cadastre-se
            </Link>
          </div>
          <div className={styles.links}>
            <Link to="/login/perdeu">Esqueceu a senha?</Link>
            <Link to="/login/resetar">Resetar a senha?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
