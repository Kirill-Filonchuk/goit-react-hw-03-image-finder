import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '22443315-0655a572bf532c2d4a9d9c050';

function fetchPixData({ searchRequest = '', page = 1 }) {
  console.log({ searchRequest, page });
  return axios
    .get(
      `${URL}?q=${searchRequest}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixData };
