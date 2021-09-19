import { useState, useLayoutEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from '../Searchbar/Searchbar';
import { Container } from '../Container/Container';
import { fetchImages } from '../../services/api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button.jsx';
import { Spinner } from '../Loader/Loader';
import { SpinnerContainer } from '../Loader/Loader.styled';
import { Modal } from '../Modal/Modal';

export const App = () => {
  const [imageName, setImageName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [reqStatus, setReqStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    if (imageName === null) {
      return;
    }

    const shouldFetch = ({ prevImageName, prevPage }) =>
      prevImageName !== imageName || prevPage !== page;
    console.log(shouldFetch(imageName, page));

    if (imageName === '') {
      return toast.error('U need to write a name of image!');
    }

    const getImages = async () => {
      try {
        setReqStatus('pending');
        const images = await fetchImages(imageName, page);
        setReqStatus('resolved');

        if (images.length === 0) {
          return toast.error(`there is no image with that name  ${imageName}`);
        }
        setImages(prevImages => [...prevImages, ...images]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        setReqStatus('resolved');
      }
    };

    if (shouldFetch(imageName, page)) {
      getImages();
    } else {
      return setImageName(prevImageName => [...prevImageName]);
    }
  }, [imageName, page]);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
    if (page !== 1) {
      setImages([]);
    }
  };

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSelectedImg = selectedImage => {
    setSelectedImage(selectedImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showButton = images.length >= 12 && reqStatus === 'resolved';

  return (
    <Container>
      <SearchBar onSearch={handleFormSubmit} />
      {reqStatus === 'pending' && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      <ImageGallery images={images} onSelect={handleSelectedImg} />
      {showButton && <Button onClick={handleBtnLoadMore} />}
      {selectedImage && (
        <Modal
          srcImg={selectedImage.largeImageURL}
          altImg={selectedImage.tags}
          onClose={closeModal}
        />
      )}
      <Toaster position="top-right" />
    </Container>
  );
};
