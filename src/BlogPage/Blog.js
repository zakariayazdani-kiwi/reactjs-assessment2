import React, { useState, useEffect } from "react";
import Card from "./Card";
const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://f2ae-182-74-85-106.ngrok.io/allblogs",{
      method:'GET',
      moode:'no-cors'
    })
    .then(result => result.json())
    .then((resp) => {
        setData(resp)
        console.log(resp)
    })
  }, []);

  return (
    <div>
      <h1>The Latest</h1>
      <br></br>
      <br></br>
      {data.length === 0 ? (
        <h1>Loading Data</h1>
      ) : (
        data.map((item, i) => {
          return (
            <Card
              image={item.image}
              title={item.title}
              date={item.created}
            />
          )
        })
      )}
    </div>
  );
};
export default Blog;
