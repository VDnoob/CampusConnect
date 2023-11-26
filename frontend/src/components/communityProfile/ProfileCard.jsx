import { useState } from "react";

export default function ProfileCard({ isCreator, onUpdateButtonClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleUpdateButtonClick = () => {
    onUpdateButtonClick();
  };

  return (
    <div>
      <div className="w-[100%] h-[300px] bg-[#f5f5f5] mt-[10px] border-[1px] border-solid rounded-[7px] flex flex-col">
        <img
          className="w-[100%] h-[40%] rounded-t-[7px] object-cover"
          alt="community-name"
          src="https://e0.365dm.com/22/06/2048x1152/skysports-lionel-messi-argentina_5796389.jpg?20220605214548"
        />

        <img
          className="w-[25%] h-[55%] object-cover rounded-[50%] mt-[-60px] ml-[10px] p-[2px] border-[1px] border-solid border-[#b7b7b7]"
          alt="community-name"
          src="https://e0.365dm.com/22/12/2048x1152/skysports-lionel-messi-argentina_6000508.jpg"
        />

        <h1 className="font-bold font-sans text-lg md:text-3xl ml-[10px]">
          Messi's Kingdom
        </h1>

        <div className="md:flex-row flex flex-col">
          <button
            onClick={handleClick}
            className={`px-4 py-2 w-[200px] font-sans ${isActive ? "bg-green-500" : "bg-blue-500"
              } text-white rounded m-[10px]`}
          >
            {isActive ? "Following" : "Follow Community"}
          </button>

          {isCreator && (
            <button
              onClick={handleUpdateButtonClick}
              className="px-4 py-2 w-[200px] font-sans bg-yellow-500 text-white rounded m-[10px]"
            >
              Update Community
            </button>
          )}
        </div>
      </div>

      <div className="w-[100%] h-auto bg-[#f5f5f5] mt-[30px] border-[1px] border-solid rounded-[7px] p-[10px]">
        <p className="font-medium font-sans text-xl m-[10px]">
          About this Community
        </p>
        <p className="m-[10px] font-sans text-base">
          Messi's Kingdom is a dynamic community uniting football enthusiasts
          under the banner of Lionel Messi's enduring legacy. Beyond matchday
          discussions and career insights, we foster camaraderie, creativity,
          and mutual support. Whether you're a devoted fan or inspired by
          Messi's journey, join us in celebrating the beautiful game and the
          spirit of togetherness that defines our vibrant community. Welcome to
          Messi's Kingdom, where passion knows no boundaries.
        </p>
      </div>
    </div>
  );
}
