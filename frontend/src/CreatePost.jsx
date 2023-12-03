import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { convert } from 'html-to-text';
import "./CreatePost.css";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { TextField, Autocomplete, Switch, FormControlLabel } from '@mui/material';

const CreatePost = () => {
    const [content2, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [isDoubt, setIsDoubt] = useState(false);
    const [communityList, setCommunityList] = useState([]);
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const quillRef = useRef();

    useEffect(() => {
        // Fetch community list when the component mounts
        const token = localStorage.getItem("Token");
        const fetchCommunityList = async () => {
            try {
                const response = await fetch('https://campusconnectbackend.onrender.com/api/v1/profile/getUserMemberCommunity', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                        // Add any other headers your backend requires
                    },

                });


                const data = await response.json();
                console.log(data.data.community);
                // const communityLis = data.data.community

                // console.log(communityLis.name);
                setCommunityList(data.data.community);
            } catch (error) {
                console.error('Error fetching community list:', error);
            }
        };

        fetchCommunityList();
    }, []);

    const dataURLtoFile = (dataURL) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], 'image.png', { type: mime });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("Token");

        // Extract text content from ReactQuill
        const quill = quillRef.current.getEditor();
        const content = quill.getText();

        // Extract image data from delta
        const delta = quill.getContents();
        const imageFiles = delta.ops
            .filter(op => op.insert && op.insert.image)
            .map(op => op.insert.image);

        // Assuming you want to upload the first image found
        const imageFile = imageFiles[0];

        let formData = new FormData();

        if (imageFile) {
            // Convert the data URL to a file and append it to formData
            const file = dataURLtoFile(imageFile);
            formData.append('file', file);
        }

        try {
            // Define the base API endpoint
            const baseEndpoint = 'https://campusconnectbackend.onrender.com/api/v1/';

            // Define the endpoint based on isDoubt
            const endpoint = isDoubt ? 'doubt/create' : 'post/create';

            // let tagArray = [];
            const tagArray = tags.split(',').map(tag => tag.trim().replace(/[^a-zA-Z0-9 ]/g, ''));
            // const tagsJsonString = JSON.stringify(tagArray);
            const tagsString = tagArray.join(',');
            console.log(tagsString);
            // Check if tags input contains a comma
            // if (tags.includes(',')) {
            //     tagArray = tags.split(',').map(tag => tag.trim());
            // } else {
            //     // If no comma, add the entire tag as a single element
            //     tagArray = tags.trim();
            // }

            // Convert the array of tags to a string for FormData
            // const tagsString = tagArray.join(', ');

            formData.append('content', content);
            formData.append('communityName', selectedCommunity);
            formData.append('tags', tagsString);

            // Append additional JSON data
            // formData.append('otherData', JSON.stringify({ key: 'value' }));

            const response = await fetch(`${baseEndpoint}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                body: formData,
            });

            console.log(response);

            if (!response.ok) {
                throw new Error(`Failed to ${isDoubt ? 'create doubt' : 'create post'}`);
            }

            // Optionally, handle the success response
            const responseData = await response.json();
            console.log(`${isDoubt ? 'Doubt' : 'Post'} created successfully:`, responseData);

            // Clear form fields after successful submission
            setContent('');
            setTags('');
            setSelectedCommunity(null);
        } catch (error) {
            console.error(`Error creating ${isDoubt ? 'doubt' : 'post'}:`, error);
        }
    };

    return (
        <div className='body2'>
            <div className='container3 body2  mt-4 ml-4'>
                <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
                <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-lg ">
                    <div className='mb-6'>
                        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
                        <ReactQuill
                            ref={quillRef}
                            theme="snow"
                            value={content2}
                            onChange={(value) => setContent(value)}
                            modules={{
                                toolbar: [
                                    [{ 'header': [1, 2, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image'],
                                    ['clean'],
                                ],
                            }}
                            formats={[
                                'header',
                                'bold', 'italic', 'underline', 'strike',
                                'list', 'bullet',
                                'link', 'image',
                            ]}
                            placeholder="Write your post..."
                            onChangeImage={(event) => console.log('Image added:', event)}
                            className="bg-gray-100 p-4 rounded"
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags (comma-separated)</label>
                        <input
                            type="text"
                            id="tags"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder='Enter your tags'
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>

                    <div className='mb-6'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={communityList.map((list) => (list.name))}
                            value={selectedCommunity}
                            onChange={(event, newValue) => setSelectedCommunity(newValue)}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Community" />}
                        />
                    </div>

                    <div className="mb-6 flex items-center">
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isDoubt}
                                    onChange={() => setIsDoubt(!isDoubt)}
                                    color="primary"
                                />
                            }
                            label="Doubt"
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 hover:text-gray-100">Post</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
