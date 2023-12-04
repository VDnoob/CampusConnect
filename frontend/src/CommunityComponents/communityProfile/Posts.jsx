import React, { useState, useEffect } from "react";
import PostTemplate from "./PostTemplate.jsx";

export default function Posts({ communityName }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("Token");
        const response = await fetch(
          "https://campusconnectbackend.onrender.com/api/v1/community/getCommunityPosts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ name: communityName }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          // console.log(data.data);
          setPosts(data.data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchPosts();
  }, [communityName]);

  const handleDelete = (postId) => {
    // Implement your delete logic here using the postId
  };

  const handleUpdate = (postId, updatedMessage) => {
    // Implement your update logic here using the postId and updatedMessage
  };

  return (
    <div className="flex-[0.6]">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <PostTemplate
            key={post._id}
            id={post._id}
            name={post.createdBy.firstName + " " + post.createdBy.lastName}
            profileImg={post.createdBy.profilePicture}
            tags={post.tags}
            message={post.content}
            photoUrl={post.fileUrl}
            likes={post.likes.length}
            onDelete={() => handleDelete(post.id)}
            onUpdate={(updatedMessage) => handleUpdate(post.id, updatedMessage)}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
