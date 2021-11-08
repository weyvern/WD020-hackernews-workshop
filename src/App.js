import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
import SearchForm from './components/SearchForm';
import ArticleList from './components/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const {
          data: { hits, nbPages }
        } = await axios.get(
          `http://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story&hitsPerPage=10&page=${page}`
        );
        setArticles(hits);
        setTotalPages(nbPages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setTimeout(() => setError(null), 5000);
        setLoading(false);
      }
    };
    !error && getNews();
  }, [query, page, error]);

  if (error) return <Alert variant='danger'>Something went wrong, we'll try again in a couple seconds...</Alert>;

  return (
    <Container className='mt-5'>
      <SearchForm setQuery={setQuery} />
      <Pagination pageCount={totalPages} setPage={setPage} />
      {loading ? <Loading animation='border' variant='primary' /> : <ArticleList articles={articles} />}
    </Container>
  );
};

export default App;
