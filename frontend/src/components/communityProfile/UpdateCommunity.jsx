import { useState } from "react";

export default function UpdateCommunity({ onCloseForm }) {
  const [members, setMembers] = useState([
    'Member1',
    'Member2',
    'Member3',
    'Member4',
    'Member5',
    'Member6',  
    'Member7',
    // Add more members as needed
  ]);
  const [selectedModerators, setSelectedModerators] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the changes to the database, including the moderator information
    onCloseForm();
  };

  const handleMemberSelect = (event) => {
    const selectedMember = event.target.value;

    if (selectedModerators.includes(selectedMember)) {
      // If the member is already selected, remove it
      setSelectedModerators((prevSelected) =>
        prevSelected.filter((member) => member !== selectedMember)
      );
    } else {
      // If the member is not selected, add it
      setSelectedModerators((prevSelected) => [...prevSelected, selectedMember]);
    }
  };

  return (
    <main className="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center overflow-auto">
      <header className="my-6">
        <p className="text-center font-extrabold font-serif text-black tracking-wider text-6xl">Update Community</p>
      </header>
      <form onSubmit={handleSubmit} className="w-full grid gap-2 px-4">
        {/* Change Community Name */}
         <div className="flex justify-between items-center">
           <label htmlFor="communityName" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">
             Change Community Name
           </label>
           <div className="flex-1">
             <input
              placeholder="Community Name"
              type="text"
              id="communityName"
              className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Moderator Input with Multi-Select Dropdown */}
        <div className="flex justify-between items-center">
          <label htmlFor="moderator" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">
            Add/Remove Moderators
          </label>
          <div className="flex-1">
            <select
              id="moderator"
              value={selectedModerators}
              onChange={handleMemberSelect}
              multiple
              className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            >
              {members.map((member) => (
                <option key={member} value={member}>
                  {member}
                </option>
              ))}
            </select>
          </div>
        </div>

                        {/* Add/Change Description */}
                        <div className="flex justify-between items-center">
          <label htmlFor="description" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">Add/Change Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="3"
            className="w-full flex-1 placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
          ></textarea>
        </div>

        {/* Change Privacy Setting */}
        <div className="flex items-center">
          <label htmlFor="privacySetting" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">Change Privacy Setting</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="privacySetting"
                value="public"
                className="form-radio h-5 w-5 text-sky-600"
              />
              <span className="ml-2">Public</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="privacySetting"
                value="private"
                className="form-radio h-5 w-5 text-sky-600"
              />
              <span className="ml-2">Private</span>
            </label>
          </div>
        </div>

        {/* Change Community Logo */}
        <div className="flex items-center">
          <label htmlFor="communityLogo" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">Change Community Logo</label>
          <input
            type="file"
            className="block text-sm text-gray-400 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white file:text-gray-500 hover:file:bg-gray-100"
          />
        </div>

        {/* Change Background Image */}
        <div className="flex items-center">
          <label htmlFor="backgroundImage" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">Change Background Image</label>
          <input
            type="file"
            className="block text-sm text-gray-400 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white file:text-gray-500 hover:file:bg-gray-100"
          />
        </div>

        {/* Change Membership Criteria
        <div className="flex justify-between items-center">
          <label htmlFor="membershipCriteria" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">Change Membership Criteria</label>
          <input
            type="text"
            id="membershipCriteria"
            className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div> */}
        {/* <div className="flex justify-between items-center">
          <label htmlFor="description" className="w-44 font-serif text-right pr-4 font-bold text-gray-700">Change Membership Criteria</label>
          <textarea
            id="Criteria"
            name="Criteria"
            placeholder="Criteria"
            rows="3"
            className="w-full flex-1 placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
          ></textarea>
        </div> */}

        {/* Form Buttons */}
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Update
          </button>
          <button
            onClick={onCloseForm}
            type="button"
            className="bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}