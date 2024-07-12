import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/felipe-jm.png"
          />
          <div className={styles.authorInfo}>
            <strong>Felipe Jung</strong>
            <span>Tech Head</span>
          </div>
        </div>

        <time
          title="11 de Julho de 2024 às 12:41h"
          dateTime="2024-07-11 12:41:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Salve!</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          nunc nec nunc.
        </p>

        <p>
          <a href="#">lucrorural.com.br</a>
        </p>

        <p>
          <a href="#">#novo</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
