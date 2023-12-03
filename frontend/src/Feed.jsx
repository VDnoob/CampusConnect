import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.jsx';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Margin } from '@mui/icons-material';
import Post from './Post.jsx';
import { Link } from "react-router-dom";


function Feed() {
  const [posts, setPosts] = useState([]);
  const tags2 = ['Hii', 'Bye'];

  useEffect(() => {
    // Make a GET request to fetch posts
    const token = localStorage.getItem("Token");
    // console.log(token);
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://campusconnectbackend.onrender.com/api/v1/post/getAllPosts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            // Add any additional headers as needed
          }
        });
        // console.log(response.json());

        if (response.ok) {
          const data = await response.json();
          console.log(data.data);
          setPosts(data.data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <div className='createIcon_container'>
            <CreateIcon />
          </div>
          <form >
            <button id="startPostButton" type='text' placeholder='Start a post'>
              <Link to="/CreatePost" className="noUnderlineLink">Start a post</Link>
            </button>
            <Link to="/CreatePost" className="link-style">
              <button type='submit' id='bt2'>
                Send
              </button>
            </Link>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <Link to="/CreatePost" className="noUnderlineLink"> <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' /> </Link>
          {/* <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' /> */}
        </div>
      </div>

      {posts.map((post) => (
        <Post
          key={post._id}
          name={post.createdBy.firstName + ' ' + post.createdBy.lastName}
          tags={post.tags}
          message={post.content}
          photoUrl={post.fileUrl} // Assuming the field is named photoUrl
        />
      ))}
      {/* <Post
        name="Jeel Viradiya"
        description="DAIICT'25 | Competitve Programmer"
        message="Hello everyone, My name is jeel and I am a student of Daiict."
      />

      <Post
        name="Jeel Viradiya"
        description="DAIICT'25 | Competitve Programmer"
        message="Hello everyone, My name is jeel and I am a student of Daiict."
      />

      <Post
        name="Jeel Viradiya"
        description="DAIICT'25 | Competitve Programmer"
        message="Hello everyone, My name is jeel and I am a student of Daiict."
      />

      <Post
        name="Jeel Viradiya"
        description="DAIICT'25 | Competitve Programmer"
        message="Hello everyone, My name is jeel and I am a student of Daiict."
      /> */}

    </div>
  )
}

export default Feed;
