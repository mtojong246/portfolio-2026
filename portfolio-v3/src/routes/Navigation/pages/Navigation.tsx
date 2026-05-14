import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function Navigation({
    toggleMenu,
}: {
    toggleMenu: () => void,
}) {
    return (
        <>
            <NavigationBar toggleMenu={toggleMenu}/>
            <Outlet />
            <Footer />
        </>
    )
}