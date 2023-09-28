import React from 'react';
import Routing from './routing/Routing';
import { SideNavigation, SideNavigationItem, SideNavigationSubItem, ThemeProvider } from '@ui5/webcomponents-react';
import { Icon } from '@ui5/webcomponents-react';
import Navbar from './components/menucomponent/Navbar';
import Login from './pages/Login';
import { Provider } from 'react-redux';
// import store from './store';
import ReactDOM from "react-dom/client"
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {

  // const root = ReactDOM.createRoot(document.getElementById("root"))

  return (
    // <Provider store={store}>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    // </Provider>
  );
}


export default App;