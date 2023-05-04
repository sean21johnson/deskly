import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Deskly</h1>
      <p className={styles.subHeader}>
        Upload an image of your home office. We will identify the objects in it.
      </p>
    </div>
  );
}

export default Header;
