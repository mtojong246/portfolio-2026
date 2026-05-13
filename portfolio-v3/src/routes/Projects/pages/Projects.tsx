import { Route, Routes } from "react-router";
import Project from "./Project";

export default function Projects() {
    return (
        <Routes>
            <Route path=":id" element={<Project />}/>
        </Routes>
    )
}