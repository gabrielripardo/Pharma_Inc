import Home from "./pages/Home";
import Details from "./pages/Details"
import Header from "./pages/Header";
import Test from "./pages/Test"
import {Provider} from "react-redux"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import {store} from "./store"

import configureStore from "./store/configureStore"
const store = configureStore();

function App() {
  return (
    <Router>    
      <Provider store={store}>      
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/details/:id" element={<Details/>}/>          
        </Routes>  
      </Provider>     
    </Router>
  );
}

export default App;
