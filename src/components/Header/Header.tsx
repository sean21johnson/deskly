import { H1 } from "@gilbarbara/components";

import styles from "./Header.module.css";

export function Header() {
  return (
    <H1
      className={styles.main}
      align="center"
      letterSpacing="0.1em"
      margin={0}
      variant="secondary"
    >
      Deskly
    </H1>
  );
}

export default Header;
