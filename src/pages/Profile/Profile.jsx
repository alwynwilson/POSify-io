import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle"><h1 className="fw-bolder">Profile</h1></div>
          <div className="profileContainer row">
            <div className="col-lg-6 profileImage">
              <img src="https://www.taxmann.com/post/wp-content/uploads/2021/04/company-concept-illustration_114360-2581.jpg" alt="Company Logo" />
            </div>
            <div className="col-lg-6 profileDetails">
              <p className="mb-5">Company Name: ABC Corp</p>
              <p className="mb-5">Email: contact@abccorp.com</p>
              <p className="mb-5">Username: john_doe</p>
              <p className="mb-5">Assigned Role: Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
