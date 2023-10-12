import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';
import "../../App.css"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { APIEndPointList } from '../../services/endpoint';
import { Api } from '../../services/api';
import { useToast } from '@chakra-ui/react';
import { config } from '../../config/config';
// import { GET_MENU } from '../../store/utils/url';

const Navbar = () => {


  const toast = useToast()
  const [menuList, setMenuList] = useState([]);
  const userData = useSelector((state) => state.signInSlice);

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
        setMenuList(response.config);
      } else {
        toast.error(response.data.ErrorMessage);
      }
    } else {
      toast.error(response.message);
    }
  };

  console.log(menuList);
  console.log(userData.LoginID);
  console.log(userData);

  // useEffect(() => {
  //   getMenu();
  // }, []);

  
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
