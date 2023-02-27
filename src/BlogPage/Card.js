import React from "react";
import './Card.css';
import { Link } from "react-router-dom";
const Card = ({ image, title, description, author, date ,link }) =>{
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        {/* <p className="card-description">{description}</p>
        <p className="card-author"><b>Author:-</b>{author}</p> */}
        <p className="card-date"><b>Date:-</b>{date}</p>
        {/* <a  className="card-link" href={link} target='_blank'>Read Full Blog Here</a> */}
        {/* <div className="fullBlogLink">
            <Link to='/blogdetail'><b>Read Full Blog Here</b></Link>
        </div> */}
      </div>
      <br></br><br></br>
    </div>
  );
};

export default Card;
