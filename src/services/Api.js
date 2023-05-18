export default async function getImages(inputValue, page) {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '35107606-ce46f6a21b8dfbba75834de78';
  return await fetch(
    `${url}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
