import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../../../store/authReducer";
import NotLoggedIn from "../components/NotLoggedIn/NotLoggedIn";
import Loading from "../components/Loading/Loading";
// import { toast, ToastContainer } from "react-toastify";
const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const { isAuth, error, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    // console.log(jwt);
    if (jwt !== "undefined" || !jwt) {
      // if (isAuth) {
      dispatch(getUser(jwt));
    }
  }, [dispatch]);

  //   console.log("Checking", isAuth);
  //   console.log("Checking", user);

  if (error) {
    console.log(error);
    // toast.error(error);
  }
  if (isLoading) {
    return (
      <div className="flex justify-center align-center h-[90vh]">
        <Loading />
      </div>
    );
  }

  return isAuth ? <Outlet /> : <NotLoggedIn />;
};

export default ProtectedRoutes;
