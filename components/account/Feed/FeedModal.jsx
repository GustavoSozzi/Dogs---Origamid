import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../../Helper/Error';
import Loading from './Loading';
import { PHOTO_GET } from '../../../data/api';
import PhotoContent from '../photo/PhotoContent';

const FeedModal = ({photo, setModalPhoto}) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) setModalPhoto(null); //usada para fechar um modal quando o usuário clica fora dele
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal