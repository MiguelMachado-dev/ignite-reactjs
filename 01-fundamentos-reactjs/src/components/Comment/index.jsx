import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import S from "./styles.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => onDeleteComment(content);

  const handleLikeComment = () => setLikeCount(likeCount + 1);

  return (
    <div className={S.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/MiguelMachado-dev.png"
      />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Miguel Machado</strong>
              <time title="28 de Julho às 09:30" dateTime="2022-07-28 09:30:23">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
