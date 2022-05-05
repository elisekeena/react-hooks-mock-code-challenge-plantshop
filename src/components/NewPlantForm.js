import React, {useState} from "react";

function NewPlantForm({onAddNewPlant}) {
  const [newName, setNewName] =useState("")
  const [newImage, setNewImage] =useState("")
  const [newPrice, setNewPrice] =useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        image: newImage,
        price: newPrice,
      }),
    })
      .then((r) => r.json())
      .then((newPlant) =>
        onAddNewPlant(newPlant))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" 
        name="name" 
        placeholder="Plant name" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
        />
        <input type="text" 
        name="image" 
        placeholder="Image URL" 
        value={newImage} 
        onChange={(e) => setNewImage(e.target.value)}  
        />
        <input type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={newPrice} 
        onChange={(e) => setNewPrice(e.target.value)}
        />
        <button onClick = {handleSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
