import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateCommunity from './communities/CreateCommunity';

export default function Search() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateCommunity = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center w-3/4">
        <SearchIcon className='pl-[2px]' />
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-50"
          placeholder="Search Community"
        />
      </div>

      <div className="w-1/4 ml-2.5 flex items-center justify-end">
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 flex items-center"
          onClick={handleCreateCommunity}
        >
          <AddIcon className="mr-2" /> Create Community
        </button>
      </div>

      {/* Render the form if isFormOpen is true */}
      {isFormOpen && <CreateCommunity onClose={() => setIsFormOpen(false)} />}
    </div>
  );
}