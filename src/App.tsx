import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
