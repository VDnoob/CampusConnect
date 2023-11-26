// Profile.jsx
import React from 'react';


function Profilecomp({ onEditClick }) {
  return (
    <div className="">
      <div>
        <img
          src={"./src/assets/profile.png"}
          className="mt-4 mb-4 rounded-xl w-full px-48 h-40"
          alt="Profile"
        />
      </div>
      <div className="flex mr-0">
        <div className="ml-48 mt-4 pl-8">
          <img className="w-32 h-32 bg-blue-100 rounded-full border-2 border-2xl border-black" />
        </div>
        <div className="flex flex-col w-2/5 h-32 justify-between ml-10 ">
          {/* Profile details go here */}
          <div className=" flex justify-between ">
            <p className="ml-6 pt-4 font-semibold text-2xl">Name</p>
            <p className="pt-4 font-normal text-xl">Gandhinagar, Gujarat</p>
          </div>
          <div className="ml-6 mt-2 text-xl">Freelance UI/UX Designer</div>
          <div className="flex justify-start items-center space-x-16 ">
            <button
              onClick={onEditClick}
              className="ml-10 w-28 h-12 mt-4 rounded-3xl bg-[#2553eb] border-2 border-black hover:bg-blue-600 text-white cursor-pointer"
            >
              Edit Profile
            </button>
            {/* <button className="w-28 h-12 rounded-3xl mt-4 bg-blue-200 border-2 border-black hover:bg-blue-400 hover:text-white cursor-pointer">
              Your Posts
            </button>
            <button className="w-28 h-12 rounded-3xl mt-4 bg-blue-200 border-2 border-black hover:bg-blue-400 hover:text-white cursor-pointer">
              Doubts Asked
            </button> */}
          </div>

        </div>


      </div>
    </div>
  );
}

export default Profilecomp;


// // Profilecomp.jsx
// import React from "react";

// function Profilecomp({ data, onEditClick }) {
//   return (
//     <div className="">
//       <div>
//         {/* Assuming 'profileImage' is a key in your data */}
//         <img
//           src={data && data.profileImage}
//           className="mt-4 mb-4 rounded-xl w-full px-48 h-40"
//           alt="Profile"
//         />
//       </div>
//       <div className="flex mr-0">
//         <div className="ml-48 mt-4 pl-8">
//           <img className="w-32 h-32 bg-blue-100 rounded-full border-2 border-2xl border-black" />
//         </div>
//         <div className="flex flex-col w-2/5 h-32 justify-between ml-10">
//           {/* Profile details go here */}
//           <div className="flex justify-between">
//             <p className="ml-6 pt-4 font-semibold text-2xl">{data && data.name}</p>
//             <p className="pt-4 font-normal text-xl">{data && data.city}</p>
//           </div>
//           <div className="ml-6 mt-2 text-xl">{data && data.role}</div>
//           <div className="flex justify-start items-center space-x-16">
//             <button
//               onClick={onEditClick}
//               className="ml-10 w-28 h-12 mt-4 rounded-3xl bg-[#2553eb] border-2 border-black hover:bg-blue-600 text-white cursor-pointer"
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profilecomp;

