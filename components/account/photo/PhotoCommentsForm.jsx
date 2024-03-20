import React from "react";
import Enviar from "../../../img/svg/enviar.svg?react";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../../Helper/Error";
import { COMMENT_POST } from "../../../data/api";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment(""); //limpando o conteúdo do campo de comentário após o envio bem-sucedido do comentário.
      setComments((comments) => [...comments, json]); //adiciona a lista de comentarios
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentForm;
