import React, { useState } from 'react';
import '../Post.css';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post({
  name,
  description,
  tags,
  message,
  photoUrl,
  profileImg,
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

  const handleDelete = () => {
    // Add your delete logic here
    handleClose();
  };

  return (
    <div className="w-[100%] h-auto mt-[30px] border-[1px] border-solid rounded-[7px] flex flex-col">
      <div className="bg-[white] p-[15px] rounded-[10px]">
        <div className="flex m-2.5">
          <Avatar src={profileImg} className="h-[35px] w-[35px]" />
          <div className="flex flex-col ml-2.5">
            <h2 className="text-base mt-0">{name}</h2>
            {tags ? tags.map((tag, index) => (
              <span key={index} className='post__tag'>{tag ? tag.name : null}</span>
            )) : null}
            <p className="mt-[-2px] text-xs text-[gray]">{description}</p>
          </div>
          <div className='post__options'>
            <IconButton
              aria-controls="post-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className='post__moreIcon'
              style={{ marginLeft: '20' }}
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
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
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
          <InputOption Icon={SmsRoundedIcon} title="Comment" color="gray" />
        </div>
      </div>
    </div>
  );
}
