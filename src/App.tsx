import Home from "./pages/Home";
import Header from "./pages/Header";
import {Provider} from "react-redux"
import {store} from "./store"

function App() {
  return (
    <Provider store={store}>      
      <Header/>
      <Home/>
    </Provider>
  );
}

export default App;
