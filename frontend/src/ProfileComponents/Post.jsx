import React, { useState } from 'react';
import '../Post.css';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

export default function Post({
  id,
  name,
  description,
  tags,
  message,
  photoUrl,
  doubts,
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

  const handleDelete = async () => {
    const token = localStorage.getItem("Token");
    console.log(id);
    try {
      const response = await fetch('https://campusconnectbackend.onrender.com/api/v1/post/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          // Add any headers or authentication tokens as needed
        },
        body: JSON.stringify({
          postId: id,
        }), // Sending the post ID to delete
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // Add any additional logic after successful deletion
      console.log('Post deleted successfully');

      // Close the menu
      handleClose();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="w-[100%] h-auto mt-[30px] border-[1px] border-solid rounded-[7px] flex flex-col">
      <div className="bg-[white] p-[15px] rounded-[10px]">
        <div className="flex m-2.5">
          <Avatar src={profileImg} className="h-[35px] w-[35px]" />
          <div className="flex flex-col ml-2.5">
            <h2 className="text-base mt-0">{name}</h2>
            {/* {tags ? tags.map((tag, index) => (
              <span key={index} className='post__tag'>{tag ? tag.name : null}</span>
            )) : null} */}
            <p className="mt-[-2px] text-xs text-[gray]">/{description}</p>
          </div>
          {tags ? tags.map((tag, index) => (
            <span key={index} className='post__tag'>{tag ? tag.name : null}</span>
          )) : null}
          <div className='doubts_info'>
            {doubts ? (
              <Typography variant="caption" className='post__doubtTag'>
                Doubt
              </Typography>
            ) : null}
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
