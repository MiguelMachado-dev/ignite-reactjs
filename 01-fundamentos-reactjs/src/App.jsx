import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import "./global.css";
import S from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={S.wrapper}>
        <Sidebar />
        <main>
          <Post author="John Doe" content="This is John Doe!" />
          <Post author="Miguel Machado" content="This is Miguel Machado!" />
        </main>
      </div>
    </>
  );
}
