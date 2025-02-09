import { HiSearch } from 'react-icons/hi';
import s from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={s.wrapper}>
      <HiSearch className={s.icon} />
      <input className={s.input} type="text" />
    </div>
  );
};
export default SearchBox;
