import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css"

export function App() {
  return (
    <>
      <Header />

      <Post author="John Doe" content="This is John Doe!" />
      <Post author="Miguel Machado" content="This is Miguel Machado!" />
    </>
  );
}
