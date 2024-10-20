import React, { useState } from 'react';
import Writtingpad from './Writtingpad';
import './Blog.css';
import { axiosinstance } from '../../config/axiosintance';

function BlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const createPost = async () => {
    if (!content) {
      alert("No content to post");
      return;
    }

    try {
      let imagePath = '';

      if (image) {
        const formDataImage = new FormData();
        formDataImage.append('image', image);

        const response = await axiosinstance.post('/posts/addimage', formDataImage, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        imagePath = response.data; 
        console.log('Image uploaded successfully:', imagePath);
      }

      const postResponse = await axiosinstance.post('/posts', {
        title,
        content,
        image: imagePath, 
      });

      console.log('Post created successfully:', postResponse.data);

    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="blog-page">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
          required
        />
        <Writtingpad
          readOnly={false}
          theme="snow"
          value={content}
          setValue={setContent}
          className="writingpad"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input-file"
        />
        {image && <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />}
        <button type="submit" className="button">Create Post</button>
      </form>
    </div>
  );
}

export default BlogPage;
