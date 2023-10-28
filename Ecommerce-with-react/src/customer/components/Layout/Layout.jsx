import MainNavigation from "./../Navigation/MainNavigation";
import Footer from "./../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
