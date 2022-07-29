import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import S from "./styles.module.css";

export function Post({ author, content, publishedAt }) {
  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <Avatar
            src={author.avatarUrl}
          />

          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="28 de Julho às 09:30" dateTime="2022-07-28 09:30:23">
          Publicado há 1h
        </time>
      </header>

      <div className={S.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={S.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={S.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
