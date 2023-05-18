import { ThreeDots } from 'react-loader-spinner';
import c from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={c.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="##3498db"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />
    </div>
  );
};
