import {Outlet, useNavigate} from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Preferences from "../components/preferences/Preferences";
import Footer from "../components/footer/Footer";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/feeds')
    }, []);

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
