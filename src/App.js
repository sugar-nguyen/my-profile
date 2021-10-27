import ProfileLeft from './profile/ProfileLeft';
import ProfileRight from './profile/ProfileRight';
import styles from './App.module.css';

console.log(styles);

const App = () => {

  return (
    <div className={styles['profile-outline']}>
      <div className={styles.profile}>
        <div className={styles['profile-content']}>
          <ProfileLeft m={styles}/>
          <ProfileRight m={styles}/>
        </div>

      </div>
    </div>

  );
}

export default App;
