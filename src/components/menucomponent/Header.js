import Navbar from "./Navbar";
import imge from "../../logo.svg";
// ...
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav-area">
          <Link to="/" className="navlogo">
            <img src={imge} alt="Company Logo" className="navlogo" />
          </Link>

          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
