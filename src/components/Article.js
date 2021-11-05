const Article = ({ article }) => {
  return (
    <li key={article.objectID}>
      <div>
        <h5>{article.title}</h5>
        <small>Author: {article.author}</small>
      </div>
    </li>
  );
};

export default Article;
