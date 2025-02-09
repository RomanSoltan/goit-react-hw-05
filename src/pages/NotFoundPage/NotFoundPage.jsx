import { useLocation } from 'react-router-dom';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import { useRef } from 'react';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location?.state ?? '/');
  return (
    <div>
      <GoBackLink to={backLinkHref.current}>Go to main page</GoBackLink>
      <h2>Page Not Found 404</h2>
    </div>
  );
};
export default NotFoundPage;
