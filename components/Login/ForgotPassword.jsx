import React from "react";
import styles from "../Login/Forgot.module.css";
import useForm from "../Forms/useForm";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import dog from "../../img/svg/login.jpg";

const ForgotPassword = () => {
  const email = useForm("email");
  const nome = useForm('nome');

  function handleSubmit(event) {
    event.preventDefault();

    // Validação antes de enviar os dados
    if (email.validate() || nome.validate()) {
      // Lógica para enviar o email ou realizar outra ação
      console.log("Dados enviados com sucesso");
    } else {
      console.log("Algum dos dados esta errado válido");
    }
  }

  return (
    <div className={styles.container}>
      <img src={dog} alt="dog reset" />
      <div className={styles.formCustom}>
        <div className={styles.orangeBox}></div> {/* Adiciona a caixa laranja */}
        <h1>Perdeu a senha?</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="email"
            type="email"
            name="reset password"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
          <Input
            label='nome'
            type='text'
            name='reset nome'
            value={nome.value}
            onChange={nome.onChange}
            onBlur={email.onblur}
          />
          {email.error && <p>{email.error}</p>}
          {nome.error && <p>{nome.error}</p>}
          <Button type="submit">Enviar Email</Button>
        </form>
      </div>
    </div>
  );
};


export default ForgotPassword;
