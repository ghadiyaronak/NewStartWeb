import Navbar from "./Navbar";
import imge from "../../logo.svg";
// ...
import { Link } from "react-router-dom";
// import client from "../../config/client";
// import { GET_MENU } from "../../store/utils/url";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { config } from "../../config/config";
import { APIEndPointList } from "../../services/endpoint";
import { Api } from "../../services/api";

const Header = () => {

  const toast = useToast()
  const [menuList, setMenuList] = useState([]);
  // const [userData, setUserData] = useState()
  const userData = useSelector((state) => state.signInSlice.user);

  const getMenu = async () => {
    const response = await Api(
      config.method.POST,
      APIEndPointList.getMenu,
      {
        LoginID: userData,
      },
      userData.accessToken
    );
    if (response.data) {
      if (response.data.Status) {
        setMenuList(response.data.Data);
      } else {
        toast.error(response.data.ErrorMessage);
      }
    } else {
      toast.error(response.message);
    }
  };

  console.log(menuList);
  console.log(userData);
  
  useEffect(() => {
    getMenu();
  }, []);

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
