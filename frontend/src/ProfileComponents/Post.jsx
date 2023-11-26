import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

export default function Post({
  name,
  description,
  message,
  photoUrl,
  profileImg,
}) {
  return (
    <div className="w-[100%] h-auto mt-[30px] border-[1px] border-solid rounded-[7px] flex flex-col">
      <div className="bg-[white] p-[15px] rounded-[10px]">
        <div className="flex m-2.5">
          <Avatar src={profileImg} className="h-[35px] w-[35px]" />
          <div className="flex flex-col ml-2.5">
            <h2 className="text-base mt-0">{name}</h2>
            <p className="mt-[-2px] text-xs text-[gray]">{description}</p>
          </div>
        </div>

        <div>
          <p className="mx-2.5">{message}</p>
        </div>

        <div className="flex justify-evenly">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
          />
          <InputOption Icon={SmsRoundedIcon} title="Comment" color="gray"   />
        </div>
      </div>
    </div>
  );
}