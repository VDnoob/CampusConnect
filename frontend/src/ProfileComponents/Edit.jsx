import React, { useState } from 'react';

const Edit = ({ onBackToApp }) => {
  const [userData, setUserData] = useState({
    about: "I am an experienced UI/UX Designer, working for group 10 project",
    lastName: 'Doe',
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    // Add more fields as needed
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBackToApp();
    // Handle form submission, e.g., send data to a server
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Handle password change, e.g., send data to a server
  };

  return (



    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

      {/* Change Profile Photo */}
      <div>
        <div class="col-xxl-4">
          <div class="bg-secondary-soft px-4 py-5 rounded">
            <div class="row g-3">
              <h4 class="mb-4 mt-0">Upload your profile photo</h4>
              <div class="text-center"></div>

              <div class="square position-relative display-2 mb-3">
                <img class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></img>
              </div>
              <input type="file" id="customFile" name="file" hidden=""></input>
              <label class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" for="customFile">Upload</label>
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove</button>

            </div></div></div></div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Change Cover Photo */}
        <div>
          <div class="col-xxl-4">
            <div class="bg-secondary-soft px-4 py-5 rounded">
              <div class="row g-3">
                <h4 class="mb-4 mt-0">Upload your Cover photo</h4>
                <div class="text-center"></div>

                <div class="square position-relative display-2 mb-3">
                  <img class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></img>
                </div>
                <input type="file" id="customFile" name="file" hidden=""></input>
                <label class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" for="customFile">Upload</label>
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove</button>
                    
                   </div></div></div></div>

        <form onSubmit={handleSubmit} className="space-y-4"></form>
        {/* Profile Information */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            About
          </label>
          <input
            type="text"
            id="about"
            name="about"
            value={userData.about}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Date Of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="DateOfBirth"
            value={userData.dob}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="college" className="block text-sm font-medium text-gray-700">
            College/University
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={userData.college}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
            Branch (for students)
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={userData.branch}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Add more profile fields as needed */}

        {/* Change Password */}
        <div className="border-t pt-4">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Save Changes
            </button>
          </div>
          <div>
            <button
              onClick={handleChangePassword}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;