import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

export default function PostTemplate({
  name,
  description,
  message,
  profileImg,
  onDelete,
  onUpdate,
  tag,
}) {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const optionsRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState(message);

  const handleUpdateClick = () => {
    setOptionsVisible(false);
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    console.log("Delete clicked");
    if (onDelete) {
      onDelete();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (isOptionsVisible || isEditing) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target)
      ) {
        setOptionsVisible(false);
        setIsEditing(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOptionsVisible, isEditing]);

  const handleThreeDotsClick = (event) => {
    event.stopPropagation();
    setOptionsVisible(!isOptionsVisible);
  };

  const handleUpdate = () => {
    onUpdate(updatedMessage);
    setIsEditing(false);
  };

  return (
    <div className="w-[100%] h-auto mt-[30px] border-[1px] border-solid rounded-[7px] flex flex-col relative">
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <button
          className="text-gray-500 focus:outline-none"
          onClick={handleThreeDotsClick}
        >
          <span className="text-xl">&#8942;</span>
        </button>
        {isOptionsVisible && (
          <div
            ref={optionsRef}
            className="absolute top-0 right-0 mt-8 mr-2 bg-white border border-gray-200 p-2 rounded flex flex-col options-container"
          >
            <button
              className="text-blue-500 focus:outline-none hover:bg-blue-100 px-2 py-1 rounded"
              onClick={handleUpdateClick}
            >
              Edit
            </button>
            <button
              className="text-red-500 focus:outline-none hover:bg-red-100 px-2 py-1 rounded mt-2"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="bg-[white] p-[15px] rounded-[10px]">

        <div className="flex m-2.5">
          <Avatar src={profileImg} className="h-[35px] w-[35px]" />
          <div className="flex flex-col ml-2.5">
            <h2 className="text-base mt-0">{name}</h2>
            <p className="mt-[-2px] text-xs text-[gray]">{description}</p>
          </div>
        </div>

        <div className="m-2.5">
          <span className="p-[5px] bg-[#e2e8f0] text-[#2d3748] rounded-2xl text-xs">{tag}</span>
        </div>

        <div>
          {isEditing ? (
            <textarea
              value={updatedMessage}
              onChange={(e) => setUpdatedMessage(e.target.value)}
              className="w-full mb-2"
            />
          ) : (
            <p className="mx-2.5">{message}</p>
          )}
        </div>

        <div className="flex justify-evenly">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
          />
          <InputOption Icon={SmsRoundedIcon} title="Comment" color="gray" />
        </div>

        {isEditing && (
          <button onClick={handleUpdate} className="text-blue-500 mt-2">
            Save
          </button>
        )}
      </div>
    </div>
  );
}
