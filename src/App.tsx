import Home from "./pages/Home";
import Header from "./pages/Header";
import Test from "./pages/Test"
import {Provider} from "react-redux"
// import {store} from "./store"

import configureStore from "./store/configureStore"
const store = configureStore();

function App() {
  return (
    <Provider store={store}>      
      <Header/>
      <Home/>      
    </Provider>
  );
}

export default App;
