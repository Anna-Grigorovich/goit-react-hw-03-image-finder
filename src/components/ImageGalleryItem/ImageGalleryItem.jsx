import c from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, tags, dataSrc, onClick }) => {
  return (
    <li className={c.ImageGalleryItem}>
      <img
        src={src}
        alt={tags}
        data-src={dataSrc}
        className={c.ImageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  dataSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
