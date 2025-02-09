import { Link } from 'react-router-dom';
import s from './GoBackLink.module.css';
import { HiArrowLeft } from 'react-icons/hi';

const GoBackLink = ({ to, children }) => {
  return (
    <Link to={to} className={s.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
export default GoBackLink;
