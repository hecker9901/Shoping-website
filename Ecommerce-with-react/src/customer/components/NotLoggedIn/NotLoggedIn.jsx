import "./NotLoggedIn.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
const NotLoggedIn = () => {
  const navigate = useNavigate();
  return (
    <div className="not-logged-container">
      <div className="not-logged-content">
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/login-access-denied-vector-illustration-system-refuses-password-error-entry-computer-device-showing-user-does-have-permission-website-mobile-development_2175-1262.jpg"
            alt="Not Logged In Illustration"
            className="not-logged-image"
          />
        </div>
        <h3 className="not-logged-title">You are not Logged In</h3>
        <button
          className="not-logged-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NotLoggedIn;
