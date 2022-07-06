
import { Provider } from "react-redux";
import { store } from './store/Store';

import Nav from './component/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
         <Nav />
       

      </Provider>
    </BrowserRouter>


  );
}

export default App;
