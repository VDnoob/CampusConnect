import { useState } from "react"
import ProfileCard from "../components/communityProfile/ProfileCard"
import Feed from "../components/communityProfile/Feed"
import UpdateCommunity from "../components/communityProfile/UpdateCommunity"
import MembersList from "../components/communityProfile/MembersList"
import ModeratorsList from "../components/communityProfile/ModeratorsList"
import Header from "./Header"

export default function CommunityProfile() {
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

    const handleUpdateButtonClick = () => {
        setIsUpdateFormVisible(true);
    };

    return (
        <div>
            <Header />
            <div className="overflow-auto">
                {isUpdateFormVisible ? (
                    <UpdateCommunity onCloseForm={() => setIsUpdateFormVisible(false)} />
                ) : (
                    <div className="w-screen h-screen flex justify-center overflow-auto">
                        <div className="mainbar w-[45%] m-[15px] ">
                            <ProfileCard isCreator={true} onUpdateButtonClick={handleUpdateButtonClick} />
                            <Feed />
                        </div>
                        <div className="rightbar w-[350px] m-[15px]">
                            <MembersList />
                            <ModeratorsList />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

