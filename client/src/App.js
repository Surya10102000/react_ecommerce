import { useEffect } from "react";
import { 
  BrowserRouter,
  Routes, 
  Route, 
  useLocation } from "react-router-dom";
import Home from "./scenes/home/Home"

const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return <div className="app">
    <BrowserRouter>
      <scrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  </div>;
}
import { Form } from "formik";

export default App;
