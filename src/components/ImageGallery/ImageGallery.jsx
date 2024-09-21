import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photoGallery }) => {
  return (
    <ul id="gallery" className={s.list}>
      {photoGallery.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard urls={urls} altDescription={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
