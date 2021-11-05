import { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './components/Article';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const {
          data: { hits }
        } = await axios.get(
          `http://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story`
        );
        setArticles(hits);
        setLoading(false);
      } catch (error) {
        setError(error);
        setTimeout(() => setError(null), 5000);
        setLoading(false);
      }
    };
    !error && getNews();
  }, [query, error]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!userInput) return alert('Please type something before searching');
    setQuery(userInput);
  };

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={userInput}
          placeholder='Search for anything tech...'
          onChange={e => setUserInput(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {loading ? (
        'Loading...'
      ) : articles.length ? (
        <ul>
          {articles.map(article => (
            <Article key={article.objectID} article={article} />
          ))}
        </ul>
      ) : (
        'No results'
      )}
    </div>
  );
};

export default App;
