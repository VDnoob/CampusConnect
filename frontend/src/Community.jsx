import Communities from "./pages/Communities"
import CommunityProfile from "./pages/CommunityProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./components/communityProfile/Feed";
import "./Community.css";

export default function Community() {
    return (
        <Routes>
            <Route path="/" element={<Communities />} />
            <Route path="/CommunityProfile" element={<CommunityProfile />} />
        </Routes>
    )
}