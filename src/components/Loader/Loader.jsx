import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Spinner = () => (
  <Loader type="Oval" color="#22187c" height={90} width={90} timeout={3000} />
);
