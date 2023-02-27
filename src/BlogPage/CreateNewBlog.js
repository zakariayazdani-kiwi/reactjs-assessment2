// import { Button } from 'react-bootstrap'
//import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import './CreateNewBlog.css'
const CreateNewBlog = () => {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
};

const handleHeadlineChange = (event) => {
    setHeadline(event.target.value);
};

const handleDescriptionChange = (event) => {
    const value = event.target.value;
    if (value.length <= 1000) {
        setDescription(value);
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowForm(false)
};

  const handleButtonClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <div className="square-div" onClick={handleButtonClick}>
        <h1>Create your own blog</h1>
      </div>
      {showForm && (<div className="form-modal">
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image">Upload Image:</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} />
          </div>
          <div>
            <label htmlFor="headline">Headline:</label>
            <input type="text" id="headline" name="headline" value={headline} onChange={handleHeadlineChange} />
          </div>
          <div>
            <label htmlFor="description">Description (max 1000 words):</label>
            <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} />
          </div>
          <button type="submit">Submit</button>
          <button className='cancel' onClick={handleSubmit}>Cancel</button>
        </form>
      </div>

      )}
    </div>
  )
}
export default CreateNewBlog

