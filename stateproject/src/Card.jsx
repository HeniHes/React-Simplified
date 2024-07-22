import "./index.css";
import profilePic from "../public/picture.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile-picture"></img>
      <h2 className="card-title">Heni Hcini</h2>
      <p className="card-text">I'm UI Ux Designer and webflow developer</p>
    </div>
  );
}
export default Card;
