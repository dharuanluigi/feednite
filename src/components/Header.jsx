import logoFeednite from "../assets/logo-feednite.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoFeednite} />
      <strong>Feednite</strong>
    </header>
  );
}
