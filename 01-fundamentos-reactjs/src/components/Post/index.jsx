import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import S from "./styles.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Muito bom esse post!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };

  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <Avatar src={author.avatarUrl} />

          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={S.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return <a key={line.content} href="#">{line.content}</a>;
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={S.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={S.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />;
        })}
      </div>
    </article>
  );
}
