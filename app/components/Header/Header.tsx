import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import VideoLibraryTwoToneIcon from "@mui/icons-material/VideoLibraryTwoTone";

export const Header = () => (
  <header className={styles.header}>
    <Image src="./logo.svg" alt="logo" width={44} height={44} />
    <h2 className={styles.header__text}>AniHub</h2>
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li>
          <Link href="/">
            <VideoLibraryTwoToneIcon />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
