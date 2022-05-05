import React, {useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState ([]);
  const [searchPlant, setSearchPlant] =useState("")

    useEffect(() => {
      fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then((plantsData) => {setPlants(plantsData)
   })
    console.log(plants)
    }, []);

    function handleAddedPlant (newPlant){
      const updatedPlants = [...plants, newPlant]
      setPlants(updatedPlants)
    }

    const displaySearchedPlant = plants.filter(plant => {
      return plant.name.toLowerCase().includes(searchPlant.toLowerCase());

    })

    
    
  return (
    <main>
      <NewPlantForm onAddNewPlant = {handleAddedPlant}/>
      <Search searchPlant ={searchPlant} onSearchChange = {setSearchPlant}/>
      <PlantList plants= {displaySearchedPlant}/>
    </main>
  );
}

export default PlantPage;
