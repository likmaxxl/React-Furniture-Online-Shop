import React from 'react';
import UserProvider from './components/Context'
import BazarEcommerceApp from './components/BazarEcommerceApp'

import { Lines } from 'react-preloaders';
import './App.css';


function App() {

  return (
    <div className="App">
<UserProvider>
<BazarEcommerceApp/>
  {/* <Lines
    color={'#d58e32'}
    time={1000}
  /> */}
</UserProvider>
    </div>
  );
}

export default App;
