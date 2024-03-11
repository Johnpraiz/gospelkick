
import { FaUsers } from 'react-icons/fa';
import styles from './UserIconAndUser.module.css'; 

const UserIconAndUser = () => {
  return (
    <div className={styles.mt10}> 
      <div className={styles.flexContainer}>
        <div className={styles.flexItemContainer}>
          <FaUsers size={20} className={styles.gap} />
          <span className={styles.fontBold}>Users:</span>
          <span>9.3 million</span>
        </div>
      </div>
    </div>
  );
};

export default UserIconAndUser;
