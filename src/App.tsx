import { useState, useEffect } from "react";
import { fetchImages, IImage } from "./api";
import { DNA } from "react-loader-spinner";
import "./App.css";

// Components
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App: React.FC = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const imagesPerPage = 12;

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchImages(query, currentPage, imagesPerPage);
        setImages((prevImages) =>
          currentPage === 1 ? data.results : [...prevImages, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch (error: any) {
        setError(error.message || "Щось пішло не так!");
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, currentPage]);

  const handleSearch = (newQuery: string): void => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setCurrentPage(1);
    }
  };

  const loadMoreImages = (): void => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: IImage): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onQuerySet={handleSearch} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {currentPage < totalPages && (
            <LoadMoreBtn label="Load More" onLoadMore={loadMoreImages} />
          )}
        </>
      )}
      {loading && (
        <div className="loader-container">
          <DNA
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
          />
        </div>
      )}
      {error && <ErrorMessage error={error} />}

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default App;
