import { ClipLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <ClipLoader className={s.loader} size={50} color="#fc4503" />
      <p>Loading movies...</p>
    </div>
  );
};
export default Loader;
