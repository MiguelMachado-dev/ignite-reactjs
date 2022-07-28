import { ThumbsUp, Trash } from "phosphor-react";
import S from "./styles.module.css";

export function Comment() {
  return (
    <div className={S.comment}>
      <img src="https://github.com/MiguelMachado-dev.png" />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Miguel Machado</strong>
              <time title="28 de Julho às 09:30" dateTime="2022-07-28 09:30:23">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Miguel, parabéns!👍</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
