import { useMyContext } from "../hooks/useMyContext";
import s from "./ImageCard.module.css";
const ImageCard = ({ urls, altDescription }) => {
  const { open } = useMyContext();

  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={urls.small}
        alt={altDescription}
        onClick={() => open(urls.full)}
      />
    </div>
  );
};

export default ImageCard;
