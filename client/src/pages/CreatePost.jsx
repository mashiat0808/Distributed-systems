import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import '../App.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must provide a title'),
    postText: Yup.string().required('Post content is required'),
    image: Yup.mixed(),
  });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('postText', postText);
      formData.append('image', image);

      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await axios.post('http://localhost:3001/posts', formData, config);

      console.log('it worked');
      console.log('backend response:', response.data);

      navigate('/posts');
    } catch (error) {
      setError('An error occurred while creating the post.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="createPostPage">
        <form className="formContainer" onSubmit={onSubmit}>
          <label>
            <b>Title: </b>
          </label>
          <input
            id="inputCreatePost"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title of post"
          />
          <span style={{ color: 'red' }}>{error?.title}</span>

          <label>
            <b>Post: </b>
          </label>
          <textarea
            id="inputCreatePost"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Post content"
          />
          <span style={{ color: 'red' }}>{error?.postText}</span>

          <label>
            <b>Image: </b>
          </label>
          <input
            id="inputCreatePost"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            placeholder="post image"
          />
          <span style={{ color: 'red' }}>{error?.image}</span>

          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
