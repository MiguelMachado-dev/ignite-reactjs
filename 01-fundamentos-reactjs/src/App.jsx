import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import S from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MiguelMachado-dev.png",
      name: "Miguel Machado",
      role: "Frontend Engineer @ Uber",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-29 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://www.meugamer.com/ezoimgfmt/i0.wp.com/www.meugamer.com/wp-content/uploads/2022/07/stray-nintendo-switch.jpg",
      name: "Gato",
      role: "Ator @ Stray",
    },
    content: [
      { type: "paragraph", content: "Miau 👋" },
      {
        type: "paragraph",
        content: "Miau miau. Miau!",
      },
      {
        type: "paragraph",
        content: "Miau! 🚀",
      },
      { type: "link", content: "miau.miau/miau" },
    ],
    publishedAt: new Date("2022-07-30 17:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={S.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
