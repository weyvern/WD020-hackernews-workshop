const Article = ({ article: { objectID, url, title, author } }) => {
  return (
    <li key={objectID}>
      <div>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <h5>{title}</h5>
        </a>
        <small>Author: {author}</small>
      </div>
    </li>
  );
};

export default Article;
