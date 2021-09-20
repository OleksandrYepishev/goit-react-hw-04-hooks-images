import axios from 'axios';

const getImagesByAxios = axios.create({
  baseURL: 'https://pixabay.com/api/',
  method: 'GET',
  params: {
    key: '22089613-2c269b20f41d8e495fd067b59',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const fetchImages = async (imageName, page) => {
  const {
    data: { hits },
  } = await getImagesByAxios(`?q=${imageName}&page=${page}`);

  return hits;
};
