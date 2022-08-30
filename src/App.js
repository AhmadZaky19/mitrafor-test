import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar";
// import Home from './pages/home';
import About from "./pages/about";
// import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        {/* <Route index path="/home" element={<Home />} /> */}
        <Route index path="/about" element={<About />} />
        {/* <Route index path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
