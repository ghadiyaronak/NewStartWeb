import React from 'react';
import Routing from './routing/Routing';
// import { SideNavigation, SideNavigationItem, SideNavigationSubItem, ThemeProvider } from '@ui5/webcomponents-react';
// import { Icon } from '@ui5/webcomponents-react';
// import Navbar from './components/menucomponent/Navbar';
// import Login from './pages/Login';
import { Provider } from 'react-redux';
// import store from './store';
// import ReactDOM from "react-dom/client"
import { ChakraProvider, theme } from '@chakra-ui/react';
import Store, { persistor } from './store/reducers/Store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Routing />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;