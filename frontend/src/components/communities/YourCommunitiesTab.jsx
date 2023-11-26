import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function YourCommunitiesTab() {
  const communitiesData = [
    {
      id: 1,
      name: "Messi's Kingdom",
      imageUrl:
        "https://e0.365dm.com/22/12/2048x1152/skysports-lionel-messi-argentina_6000508.jpg",
    },
    {
      id: 2,
      name: "Captain Cool's Corner",
      imageUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/357400/357408.10.jpg",
    },
  ];

  return (
    <div className="max-h-[24rem] overflow-auto flex-col flex-[1_1_0.8] h-[100%]">
      {communitiesData.map((community) => (
        <div className="pt-3 bg-white" key={community.id}>
          <div className="mx-2 md:mx-5 mb-1 flex flex-row bg-white items-center">
            <Avatar
              alt={community.name}
              src={community.imageUrl}
              sx={{ width: 46, height: 46 }}
              className="mb-2 md:mb-0"
            />
            <Typography
              variant="h6"
              className="bg-white cursor-pointer pl-2 md:pl-4"
            >
              <Link to="/Community/CommunityProfile">{community.name}</Link>
            </Typography>
          </div>
          <hr className="h-[1px]" />
        </div>
      ))}
    </div>
  );
}
