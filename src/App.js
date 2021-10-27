import './App.css';
import ProfileLeft from './profile/ProfileLeft';
import ProfileRight from './profile/ProfileRight';

function App() {
  return (
    <div className="profile-outline">
      <div className="profile">
        <div className="profile-content">
          <ProfileLeft />
          <ProfileRight />
        </div>

      </div>
    </div>

  );
}

export default App;
