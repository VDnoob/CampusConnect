import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import header_img from "./header_pfp.png";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src={header_img} className='post__avatar' />
        <div className='post__info'>
          <h2>{name}</h2>
          <p className='post__info__desc'>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message} <img src={photoUrl} alt='Post' className='post__image' /></p>
      </div>

      <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
        <InputOption Icon={SmsRoundedIcon} title='Comment' color='gray' />
      </div>
    </div>
  )
}

export default Post
