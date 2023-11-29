import { useState } from "react";
import JoinCommunitiesTab from "../CommunityComponents/communities/JoinCommunitiestab";
import YourCommunitiesTab from "../CommunityComponents/communities/YourCommunitiesTab";
import Header from "./Header";

export default function Communities() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div>
      <Header />
      <div className="w-[80%] h-auto min-h-[500px] mt-14 mb-6 mx-auto px-4 py-8 bg-white shadow-lg">
        <ul className="w-3/5 flex items-center justify-between border mt-0 mb-8 mx-auto rounded-[2rem] border-solid border-[#39A2DB] ">
          <li
            className={`tab-style ${activeTab === "tab1" ? "tab-active" : "hover:bg-[#32e0c426]"
              }`}
            onClick={handleTab1}
          >
            Your Communities
          </li>

          <li
            className={`tab-style last:rounded-none last:rounded-r-[32px] ${activeTab === "tab2" ? "tab-active" : "hover:bg-[#32e0c426]"
              }`}
            onClick={handleTab2}
          >
            Join Communities
          </li>
        </ul>
        <div>
          {activeTab === "tab1" ? <YourCommunitiesTab /> : <JoinCommunitiesTab />}
        </div>
      </div>
    </div>
  );
}
