import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption.jsx";
import ImageIcon from "@mui/icons-material/Image";
import PostTemplate from "./PostTemplate.jsx";

export default function Doubts() {
  const [doubts, setDoubts] = useState([
    {
      id: 1,
      name: "Narendra Modi",
      description: "Started with chai, now stirring policies",
      message:
        "Modi's chai might be piping hot, but his speeches are scalding! #TeaAndTactics.",
      profileImg:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2015-05/05/full/1430823912-5957.jpg",
      tag: "doubt",
    },
    {
      id: 2,
      name: "Arvind Kejriwal",
      description: "Muffler-wielding hero of commoners.",
      message:
        "Kejriwal's muffler - because solving political problems is a lot like staying warm in Delhi winters: wrap it up!",
      profileImg:
        "https://indianmemetemplates.com/wp-content/uploads/Arvind-Kejriwal-wearing-floral-crown-843x1024.jpg",
      tag: "doubt",
    },
    {
      id: 3,
      name: "Rahul Gandhi",
      description: "Politician by day, comedian undercover",
      message:
        "They say laughter is the best medicine. Enter Rahul Gandhi – your friendly neighborhood political jester!",
      profileImg: "https://i.ytimg.com/vi/jwrhqGqowyU/maxresdefault.jpg",
      tag: "doubt",
    },
    {
      id: 4,
      name: "Imran Khan",
      description:
        "Once a cricket legend, now... well, still figuring out politics",
      message:
        "Imran Khan's playbook: swing in cricket, swing in politics – some things never change. Is he running a country or just another innings?",
      profileImg:
        "https://static.toiimg.com/photo/msid-76340696,imgsize-37436/76340696.jpg",
      tag: "doubt",
    },
  ]);

  const handleDelete = (doubtId) => {
    setDoubts((prevDoubts) =>
      prevDoubts.filter((doubt) => doubt.id !== doubtId)
    );
  };

  const handleUpdate = (doubtId, updatedMessage) => {
    setDoubts((prevDoubts) =>
      prevDoubts.map((doubt) =>
        doubt.id === doubtId ? { ...doubt, message: updatedMessage } : doubt
      )
    );
  };

  return (
    <div className="flex-[0.6]">
      <div className="bg-[white] mt-2.5 mb-5 p-2.5 rounded-[10px] border border-black">
        <div className="ml-[2vh] mt-[1vh]">
          <div className="border flex text-[gray] h-[5vh] pl-[15px] rounded-[30px] border-solid border-[lightgray]">
            <CreateIcon />
          </div>
          <div className="flex justify-evenly mt-2">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
          </div>
          <form className="flex w-full justify-evenly mt-[10px]">
            <button
              type="text"
              placeholder="Ask Doubt"
              className="w-[70%] bg-[#f3f2ef] text-[gray] rounded-[10px] border-[none] hover:cursor-pointer"
            >
              Ask Doubt
            </button>
            <button
              type="submit"
              className="w-[18%] text-[white] bg-[#3480cd] rounded-[15px] border-2 border-solid border-[white] hover:bg-[white] hover:text-[#3480cd] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:font-semibold hover:border-2 hover:border-solid hover:border-[#3480cd]"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {doubts.map((doubt) => (
        <PostTemplate
          key={doubt.id}
          name={doubt.name}
          description={doubt.description}
          message={doubt.message}
          profileImg={doubt.profileImg}
          onDelete={() => handleDelete(doubt.id)}
          onUpdate={(updatedMessage) => handleUpdate(doubt.id, updatedMessage)}
          tag={doubt.tag}
        />
      ))}
    </div>
  );
}
