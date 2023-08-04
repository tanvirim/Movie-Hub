import ReactDOM from 'react-dom/client';

import { ChakraProvider,ColorModeScript } from "@chakra-ui/react";
import './index.css';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>


<ColorModeScript/>
<ChakraProvider>
<Provider
    store={store}
    >
    <App />
  </Provider>
</ChakraProvider>
    </React.StrictMode>
)