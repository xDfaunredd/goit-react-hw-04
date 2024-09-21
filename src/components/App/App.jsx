import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

import fetchFunc from "../fetchFunc/fetchFunc";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const maxPages = useRef();

  useEffect(() => {
    async function getFetchData() {
      try {
        if (!query) {
          return;
        }

        setError(false);
        setIsDisabled(true);
        setLoading(true);

        const data = await fetchFunc(query, page);
        console.log(data);
        maxPages.current = Math.ceil(data.total / 12);

        if (!data.results.length) {
          toast.error(`There are no ${query}`);
          setShowBtn(false);
          setQuery("");
          return;
        }

        setGallery((prev) => [...prev, ...data.results]);
        setShowBtn(true);
        setIsDisabled(false);

        if (maxPages.current === page) {
          toast.error(`There are no more ${query} images`);
          setIsDisabled(true);
          setShowBtn(false);
          return;
        }
      } catch {
        setError(true);
        setGallery([]);
        setQuery("");
        setIsDisabled(true);
        setShowBtn(false);
      } finally {
        setLoading(false);
      }
    }
    getFetchData();
  }, [query, page]);

  function resetGallery(searchRequest) {
    setQuery(searchRequest);

    setGallery([]);
    setPage(1);
    setShowBtn(false);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <SearchBar resetGallery={resetGallery} />
      <ImageGallery photoGallery={gallery} />
      <ImageModal />
      {loading && <Loader />}

      {error && <ErrorMessage />}
      {showBtn && (
        <LoadMoreBtn
          setPage={setPage}
          isDisabled={isDisabled}
          gallery={gallery}
        />
      )}
    </>
  );
}

export default App;
