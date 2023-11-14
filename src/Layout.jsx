import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./Home";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <main className="layout">
      <div className="header">
        <div className="header-links">
          <i className="material-icons">favorite</i>
          <i className="material-icons">attachment</i>
          <i className="material-icons">computer</i>
        </div>
        <div className="header-logo">
          <Link to="/">LOGO HERE</Link>
        </div>
        <div className="header-profile">profile</div>
      </div>
      <div className="body bg-gray-500">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};

export default Layout;
