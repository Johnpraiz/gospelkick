import Image from 'next/image';
import styles from './Header.module.css';

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
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.createAccountButton}>Create Account</button>
      </div>
    </header>
  );
};

export default Header;
