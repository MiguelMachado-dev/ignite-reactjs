import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import S from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={S.sidebar}>
      <img
        className={S.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={S.profile}>
        <Avatar src="https://github.com/MiguelMachado-dev.png" />

        <strong>Miguel Machado</strong>
        <span>Frontend Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
