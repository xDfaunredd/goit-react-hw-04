import { useEffect, useRef } from "react";
import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ setPage, isDisabled, gallery }) => {
  const count = useRef(1);

  useEffect(() => {
    if (gallery.length === 12) {
      count.current = 1;
    }

    if (count.current !== 1) {
      window.scrollBy({ top: 3 * 300, behavior: "smooth" });
    }

    count.current = 2;
  }, [gallery]);

  return (
    <button
      disabled={isDisabled}
      className={s.button}
      onClick={() => setPage((prev) => prev + 1)}
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
