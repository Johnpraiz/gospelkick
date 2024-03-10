
import Image from 'next/image';
import styles from './Header.module.css';
//import gospelkicklogo from "../../image/gospelkicklogo.jpg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/gospelkicklogo.jpg"
          alt="Logo"
          width={50} 
          height={50} 
          priority
        />
      </div>
      <nav className={styles.nav}>
        {/* Add your navigation links here */}
      </nav>
    </header>
  );
};

export default Header;
