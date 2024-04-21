import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Preferences from "../components/preferences/Preferences";
import Footer from "../components/footer/Footer";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <>
            <RecoilRoot>
                <Navigation />
                <Outlet />
                <Preferences />
                <Footer />
            </RecoilRoot>
        </>
    );
}

export default App;
