import React from "react";
import styles from "../Login/Login.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../../Helper/Error";
import useForm from "../Forms/useForm";
import { USER_POST } from "../../data/api";
import { UserContext } from "../../Hooks/UserContext";
import dog from "../../img/svg/login.jpg";
import useFetch from "../../Hooks/useFetch";
import Head from "../../Helper/Head";


const Register = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const {loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const {response} = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <div className={styles.container}>
      <Head title='Crie sua conta' />
      <img className={styles.dogImage} src={dog} alt="dog reset" />
      <div className={styles.formCustom}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username} />
          <Input label="Email" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Cadastrando</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error error={error}/>
        </form>
      </div>
    </div>
  );
};

export default Register;
