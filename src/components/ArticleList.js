import Article from './Article';

const ArticleList = ({ articles }) => {
  return articles.length ? (
    <ul>
      {articles.map(article => (
        <Article key={article.objectID} article={article} />
      ))}
    </ul>
  ) : (
    'No results'
  );
};

export default ArticleList;
