import "../css/profile.css";
import "../css/App.css";
import ParticlesBg from "particles-bg";

function Profile() {
  return (
    <div className="profile-div">
      <div className="particle-bg">
        <ParticlesBg
          color="#2ca4f2"
          num={75}
          type="cobweb"
          bg={true}
          config={{ rps: 0.00001 }}
        />
      </div>
      <div className="profile-grid">
        <div className="columnPic">
          <img
            className="troyProfilePic"
            src="../images/headshot.jpg"
            alt="Russ Warner"
          />
        </div>
        <div>
          <h1 className="profileName">Russ Warner</h1>
          <h2 className="NMLS">Loan Officer (NMLS #70310)</h2>
          <p className="profileP">
            Hello! I&apos;m Russ, I look forward to helping you along your home
            buying experience. I&apos;ve provided a few useful links to get you
            started.
          </p>
          <div className="buttonBlueDiv">
            <a href="#getStarted" className="buttonBlue">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
