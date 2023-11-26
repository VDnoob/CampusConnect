export default function CreateCommunity({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    // For example, you can send a request to create a community
    // and then close the form when done
    onClose();
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:h-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={handleSubmit} className="p-8">
            <main className="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
              <header className="my-6">
                <p className="text-center font-extrabold font-serif text-sky-500 tracking-wider text-6xl">
                  Create Community
                </p>
              </header>

              {/* Your form content */}
              <div className="grid gap-2 px-4">
                {/* Community Name */}
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="communityName"
                    className="w-44 text-right pr-4 font-bold text-gray-700"
                  >
                    Community Name
                  </label>
                  <div className="flex-1">
                    <input
                      required
                      placeholder="Community Name"
                      type="text"
                      id="communityName"
                      className="w-full flex-1 max-w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="description"
                    className="w-44 text-right pr-4 font-bold text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="3"
                    className="w-full flex-1 placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
                  ></textarea>
                </div>

                {/* Privacy Setting */}
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="privacySetting"
                    className="w-44 text-right pr-4 font-bold text-gray-700"
                  >
                    Privacy Setting
                  </label>
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

                {/* Community Logo */}
                <div className="flex justify-start items-center">
                  <label
                    htmlFor="communityLogo"
                    className="w-44 text-right pr-4 font-bold text-gray-700"
                  >
                    Community Logo
                  </label>
                  <input
                    type="file"
                    className="block text-sm text-white bg-sky-600 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-solid file:border file:border-sky-600 file:text-sm hover:file:bg-sky-700"
                  />
                </div>

                {/* Background Image */}
                <div className="flex justify-start items-center">
                  <label
                    htmlFor="backgroundImage"
                    className="w-44 text-right pr-4 font-bold text-gray-700"
                  >
                    Background Image
                  </label>
                  <input
                    type="file"
                    className="block text-sm text-white bg-sky-600 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-solid file:border file:border-sky-600 file:text-sm hover:file:bg-sky-700"
                  />
                </div>

                {/* Membership Criteria */}
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="membershipCriteria"
                    className="w-44 text-right pr-4 font-bold text-gray-700"
                  >
                    Membership Criteria
                  </label>
                  <textarea
                    id="membershipCriteria"
                    name="membershipCriteria"
                    placeholder="Membership Criteria"
                    rows="3"
                    className="w-full flex-1 placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
                  ></textarea>
                </div>
                {/* Form Buttons */}
                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    className="bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                  >
                    Create Community
                  </button>
                </div>
              </div>
            </main>
          </form>
        </div>
      </div>
    </div>
  );
}
