import React, { useState } from 'react';
import './CreateNewBlog.css'
const CreateNewBlog = () => {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleImageChange = (event) => {
    // const file = event.target.files[0];
    // setImage(file);
    setImage(event.target.value)
};

const handleHeadlineChange = (event) => {
    setTitle(event.target.value);
};

const handleDescriptionChange = (event) => {
    const value = event.target.value;
    if (value.length <= 1000) {
        setDescription(value);
    }
};

const handleSubmit = (event) => {
    // Handle form submission logic here
    
    let newBlogData={title,description,image}
    console.log(newBlogData)
  //     fetch("https://f2ae-182-74-85-106.ngrok.io/post", {
  //   method: "POST",
  //   mode:'no-cors',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body:JSON.stringify(newBlogData)
  // }).then((resp)=>{
  //   resp.json().then((result)=>
  //   console.log(result)
  //   )
  //   })
  fetch('https://f2ae-182-74-85-106.ngrok.io/post', {

  method: 'POST', 
  mode: 'no-cors', 
  body: JSON.stringify(newBlogData)
})
setShowForm(false)
  }

  const handleButtonClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <div className="square-div" onClick={handleButtonClick}>
        <h1>Create your own blog</h1>
      </div>
      {showForm && (<div className="form-modal">
        <div className="form-container">
          <div>
            <label >Upload Image:</label>
            <input type="text" id="image" value={image} onChange={handleImageChange} />
          </div>
          <div>
            <label>Headline:</label>
            <input type="text" id="headline" name="headline" value={title} onChange={handleHeadlineChange} />
          </div>
          <div>
            <label htmlFor="description">Description (max 1000 words):</label>
            <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <button className='cancel' onClick={handleSubmit}>Cancel</button>
        </div>
      </div>

      )}
    </div>
  )
}
export default CreateNewBlog

