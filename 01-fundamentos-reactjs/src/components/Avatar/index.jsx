import S from "./styles.module.css";

export function Avatar({ src, hasBorder = true }) {
  return (
    <img className={hasBorder ? S.avatarWithBorder : S.avatar} src={src} />
  );
}
