import S from "./styles.module.css";

export function Post() {
  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <img
            className={S.avatar}
            src="https://github.com/MiguelMachado-dev.png"
          />

          <div className={S.authorInfo}>
            <strong>Miguel Machado</strong>
            <span>Frontend Engineer</span>
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
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
