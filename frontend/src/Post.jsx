import React, { useState } from "react";
import "./Post.css";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Typography from "@mui/material/Typography";
import header_img from "./header_pfp.png";

function Post({
  name,
  description,
  message,
  photoUrl,
  tags,
  doubts,
  profilePicture,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    // Add your update logic here
    handleClose();
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={profilePicture} className="post__avatar" />
        <div className="post__info">
          <h2>{name}</h2>
          <div className="post__info__desc">
            <p className="post__info__desc">/{description}</p>
          </div>
          {/* <p className='post__info__desc'>{description}</p> */}
        </div>
        {tags
          ? tags.map((tag, index) => (
              <span key={index} className="post__tag">
                {tag ? tag.name : null}
              </span>
            ))
          : null}
        {/* <p className='post__info__desc'>/{description}</p> */}
        {/* Add the dropdown button */}
        <div className="doubts_info">
          {doubts ? (
            <Typography variant="caption" className="post__doubtTag">
              Doubt
            </Typography>
          ) : null}
        </div>
        <div className="post__options">
          <IconButton
            aria-controls="post-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="post__moreIcon"
            style={{ marginLeft: "20" }}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="post-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleUpdate}>Update</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="post__body">
        <p>
          {message}{" "}
          {photoUrl ? (
            <img src={photoUrl} alt="Post" className="post__image" />
          ) : null}
        </p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={SmsRoundedIcon} title="Comment" color="gray" />
      </div>
    </div>
  );
}

export default Post;
