import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const[isInStock, setIsInStock] =useState(true)


  function handleSoldOutButton(){
    setIsInStock(!isInStock)
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick = {handleSoldOutButton} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleSoldOutButton}> Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
