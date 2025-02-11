import { HiSearch } from 'react-icons/hi';
import s from './SearchBox.module.css';

import toast from 'react-hot-toast';
import { useState } from 'react';

const SearchBox = ({ handleChangeQuery }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error('Please enter a valid search term');
      setValue('');
      return;
    }
    handleChangeQuery(value.trim());
    setValue('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <HiSearch className={s.icon} />
      <input
        className={s.input}
        onChange={e => setValue(e.target.value)}
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      />
      <button className={s.btn} type="submit" disabled={!value.trim()}>
        Search
      </button>
    </form>
  );
};
export default SearchBox;
