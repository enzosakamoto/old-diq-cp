import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';
import imt from '@/assets/imt.svg';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <>
            <Image className={styles.logo} src={imt} alt="Logo do IMT"></Image>
          </>
        </Link>
        <div className={styles['navbar-links']}>
          <Link href="/forms">formulário</Link>
          <Link href="/companies">empresas</Link>
        </div>
      </nav>
    </>
  );
}
