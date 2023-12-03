import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({
  communityDetails,
  onUpdateButtonClick,
}) {
  const [isActive, setIsActive] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [creatorData, setCreatorData] = useState([]);
  const [moderatorData, setModeratorData] = useState([]);
  const navigate = useNavigate();
  const loggedInUserId = localStorage.getItem("UserId");

  useEffect(() => {
    if (communityDetails.createdBy && communityDetails.createdBy._id) {
      setCreatorData(communityDetails.createdBy);
    }
    if (communityDetails.moderators && communityDetails.moderators.length > 0) {
      setModeratorData(communityDetails.moderators);
    }
  }, [communityDetails]);

  const isCreator = creatorData._id === loggedInUserId;
  const isModerator = moderatorData.some(moderator => moderator._id === loggedInUserId);

  const handleClick = async () => {
    // try {
    //   const token = localStorage.getItem("Token");

    //   if (!isActive) {
    //     await fetch('https://campusconnectbackend.onrender.com/api/v1/community/addMember', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + token,
    //       },
    //       body: JSON.stringify({
    //         communityName: communityDetails.name,
    //         useremail: 'user@example.com',  // Replace with the actual user's email
    //       }),
    //     });
    //   } else {
    //     await fetch('https://campusconnectbackend.onrender.com/api/v1/community/removeMember', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + token,
    //       },
    //       body: JSON.stringify({
    //         communityName: communityDetails.name,
    //         useremail: 'user@example.com',  // Replace with the actual user's email
    //       }),
    //     });
    //   }

    //   setIsActive(!isActive);
    // } catch (error) {
    //   console.error('Error handling follow/unfollow:', error);
    // }
  };

  const handleUpdateButtonClick = () => {
    onUpdateButtonClick();
  };

  const handleDeleteButtonClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    // try {
    //   const token = localStorage.getItem("Token");
    //   const response = await fetch('https://campusconnectbackend.onrender.com/api/v1/community/delete', {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer ' + token,
    //     },
    //     body: JSON.stringify({
    //       name: communityDetails.name,
    //     }),
    //   });
  
    //   if (response.ok) {
    //     const data = await response.json();
  
    //     if (data.success) {
    //       console.log('Deletion successful:', data.message);
    //       navigate("/Community");
    //     } else {
    //       console.error('Failed to delete community:', data.message);
    //     }
    //   } else {
    //     console.error('Failed to delete community');
    //   }
    // } catch (error) {
    //   console.error('Error confirming delete:', error);
    // }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <div className="w-[100%] h-[300px] bg-[#f5f5f5] mt-[100px] border-[1px] border-solid rounded-[7px] flex flex-col">
        <img
          className="w-[100%] h-[40%] rounded-t-[7px] object-cover"
          alt="community-name"
          src={communityDetails.coverPage}
        />

        <img
          className="w-[25%] h-[55%] object-cover rounded-[50%] mt-[-60px] ml-[10px] p-[2px] border-[1px] border-solid border-[#b7b7b7]"
          alt="community-name"
          src={communityDetails.picture}
        />

        <h1 className="font-bold font-sans text-lg md:text-3xl ml-[10px]">
          {communityDetails.name}
        </h1>

        <div className="md:flex-row flex flex-col">
          <button
            onClick={handleClick}
            className={`px-2 py-2 w-[200px] font-sans ${
              isActive ? "bg-green-500" : "bg-blue-500"
            } text-white rounded m-[10px]`}
          >
            {isActive ? "Following" : "Follow Community"}
          </button>

          {(isCreator || isModerator) && (
            <button
              onClick={handleUpdateButtonClick}
              className="px-2 py-2 w-[200px] font-sans bg-yellow-500 text-white rounded m-[10px]"
            >
              Update Community
            </button>
          )}

          {isCreator && (
            <button   
              onClick={handleDeleteButtonClick}
              className="px-2 py-1 w-[200px] font-sans bg-red-500 text-white rounded m-[10px]">
              Delete Community
            </button>
          )}
        </div>
      </div>

      <div className="w-[100%] h-auto bg-[#f5f5f5] mt-[30px] border-[1px] border-solid rounded-[7px] p-[10px]">
        <p className="font-medium font-sans text-xl m-[10px]">
          About this Community
        </p>
        <p className="m-[10px] font-sans text-base">
          {communityDetails.description}
        </p>
        <p className="font-medium font-sans text-xl m-[10px]">
          Tags
        </p>
        <p className="m-[10px] font-sans text-base">
          {communityDetails.tags}
        </p>
      </div>

      {showConfirmation && (
        <div className="fixed -translate-x-2/4 -translate-y-2/4 bg-[white] border rounded-xl shadow-lg z-[1000] text-center p-5 border-solid border-[#ccc] left-2/4 top-2/4">
          <p className="mb-[15px]">Are you sure you want to delete your community?</p>
          <button className="px-2 py-2 w-[80px] font-sans text-white rounded m-[10px] bg-blue-500" onClick={handleConfirmDelete}>OK</button>
          <button className="px-2 py-2 w-[80px] font-sans text-white rounded m-[10px] bg-blue-500" onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}

    </div>
  );
}
