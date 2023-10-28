import "./EmptyCart.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-content">
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzChvQ6zMMO6HMf9shw8Ow4SJTrugCdcj26Q&usqp=CAU"
            alt="Empty Cart Illustration"
            className="empty-cart-image"
          />
        </div>
        <h3 className="empty-cart-title">Your Cart is Empty</h3>
        <p className="empty-cart-text">
          It looks like you have not added any items to your cart yet.
        </p>
        <button className="empty-cart-button" onClick={() => navigate("/")}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
