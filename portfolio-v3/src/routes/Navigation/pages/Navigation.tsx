import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function Navigation() {
    return (
        <>
            <NavigationBar/>
            <Outlet />
            <Footer />
        </>
    )
}