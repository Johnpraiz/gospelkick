import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/afro-beat">
          <span>Afro-Beat</span>
        </Link>
        <Link href="/christian-gospel">
          <span>Christian/Gospel</span>
        </Link>
        <Link href="/hip-pop">
          <span>Hip-Pop</span>
        </Link>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
