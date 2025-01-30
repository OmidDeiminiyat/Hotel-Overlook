import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const News = () => {
  const { id } = useParams(); 
  const [itemData, setItemData] = useState(null);
console.log(id);

  useEffect(() => {
    // Fetch data based on ID
    fetch(`http://localhost:4000/news/${id}`)
      .then((response) => response.json())
      .then((data) => setItemData(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!itemData) return <p>Loading...</p>;
    console.log(itemData);

  return (
    <div>
        <h1>news</h1>
      <h1>{itemData.title}</h1>
      <p>{itemData.description}</p>
    </div>
  );
};
