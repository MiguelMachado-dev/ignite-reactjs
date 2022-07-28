import S from "./styles.module.css";

export function Header() {
  return (
    <header className={S.header}>
      <img src="/ignite-logo.svg" alt="Logotipo do Ignite" />
      <strong>Ignite feed</strong>
    </header>
  );
}
