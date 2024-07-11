export function Post({ author, content }) {
  return (
    <article>
      <header>
        <h2>{author}</h2>
      </header>
      <p>{content}</p>
    </article>
  );
}
