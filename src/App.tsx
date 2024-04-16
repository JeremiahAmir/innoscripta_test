import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Preferences from "./components/preferences/Preferences";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Preferences />
      <Footer />
    </>
  );
}

export default App;
