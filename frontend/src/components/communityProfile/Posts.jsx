import React, { useState } from 'react';
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption.jsx";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PostTemplate from "./PostTemplate.jsx";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Narendra Modi",
      description: "Started with chai, now stirring policies",
      message: "Modi's chai might be piping hot, but his speeches are scalding! #TeaAndTactics.",
      profileImg: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-05/05/full/1430823912-5957.jpg",
    },
    {
      id: 2,
      name: "Arvind Kejriwal",
      description: "Muffler-wielding hero of commoners.",
      message: "Kejriwal's muffler - because solving political problems is a lot like staying warm in Delhi winters: wrap it up!",
      profileImg: "https://indianmemetemplates.com/wp-content/uploads/Arvind-Kejriwal-wearing-floral-crown-843x1024.jpg",
    },
    {
      id: 3,
      name: "Rahul Gandhi",
      description: "Politician by day, comedian undercover",
      message: "They say laughter is the best medicine. Enter Rahul Gandhi – your friendly neighborhood political jester!",
      profileImg: "https://i.ytimg.com/vi/jwrhqGqowyU/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "Imran Khan",
      description: "Once a cricket legend, now... well, still figuring out politics",
      message: "Imran Khan's playbook: swing in cricket, swing in politics – some things never change. Is he running a country or just another innings?",
      profileImg: "https://static.toiimg.com/photo/msid-76340696,imgsize-37436/76340696.jpg",
    },
    {
      id: 5,
      name: "Angela Merkel",
      description: "Former Chancellor of Germany",
      message: "Angela Merkel, the 'Iron Lady' of Europe, leaves a legacy of strong leadership and steady diplomacy.",
      profileImg: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Portrait_of_Angela_Merkel_%28cropped%29_%28cropped%29.jpg",
    },
    {
      id: 6,
      name: "Justin Trudeau",
      description: "Prime Minister of Canada",
      message: "Justin Trudeau, the charismatic leader known for his progressive policies and distinctive socks.",
      profileImg: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Justin_Trudeau_%2829811860552%29_%28cropped%29.jpg",
    },
    {
      id: 7,
      name: "Shinzo Abe",
      description: "Former Prime Minister of Japan",
      message: "Shinzo Abe, the architect of 'Abenomics' and a key figure in Japanese politics.",
      profileImg: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Shinz%C5%8D_Abe_Official.jpg",
    },
    {
      id: 8,
      name: "Jacinda Ardern",
      description: "Prime Minister of New Zealand",
      message: "Jacinda Ardern, the compassionate leader who led New Zealand through challenging times with empathy and resilience.",
      profileImg: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jacinda_Ardern%2C_2018.jpg",
    },
    {
      id: 9,
      name: "Vladimir Putin",
      description: "President of Russia",
      message: "Vladimir Putin, a prominent figure in global politics known for his assertive leadership style.",
      profileImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vladimir_Putin_%282020-02-19%29.jpg/1280px-Vladimir_Putin_%282020-02-19%29.jpg",
    },
  ]);

  const handleDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleUpdate = (postId, updatedMessage) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, message: updatedMessage } : post
      )
    );
  };

  return (
    <div className="flex-[0.6]">
      {/* <div className='bg-[white] mt-2.5 mb-5 pb-5 p-2.5 rounded-[10px]'>
//         <div className='ml-[2vh] mt-[1vh]'>
//           <div className='border flex text-[gray] h-[5vh] pl-[15px] p-2.5 rounded-[30px] border-solid border-[lightgray]'>
//             <CreateIcon />
//           </div>
//           <form className='flex w-full justify-evenly'>
//             <button 
//                 type='text' 
//                 placeholder='start a post'
//                 className='w-[70%] bg-[#f3f2ef] text-[gray] rounded-[10px] border-[none] hover:cursor-pointer'
//             >
//                 Start a post
//             </button>
//             <button 
//                 type='submit'
//                 className='w-[18%] text-[white] bg-[#3480cd] rounded-[15px] border-2 border-solid border-[white] hover:bg-[white] hover:text-[#3480cd] hover:transition-all hover:duration-[0.5s] hover:ease-[ease-in-out] hover:font-semibold hover:border-2 hover:border-solid hover:border-[#3480cd]'
//             >
//                 Send
//             </button>
//           </form>
//         </div>

//         <div className='flex justify-evenly mt-[2%]'>
//           <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
//           <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
//         </div>
//       </div> */}
      {posts.map((post) => (
        <PostTemplate
          key={post.id}
          name={post.name}
          description={post.description}
          message={post.message}
          profileImg={post.profileImg}
          onDelete={() => handleDelete(post.id)} 
          onUpdate={(updatedMessage) => handleUpdate(post.id, updatedMessage)}
        />
      ))}
    </div>
  );
}