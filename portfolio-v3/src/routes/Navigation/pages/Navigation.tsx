import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";

export default function Navigation() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}