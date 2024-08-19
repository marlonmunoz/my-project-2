
import '../App.css';
import '../NavBar.css'; 
import { useState, useEffect } from 'react';   
import { Outlet } from 'react-router-dom';  
import NavBar from './NavBar';
import Header from './Header';
import Toy from './Toy';


function App() {  
  const [toys, setToys] = useState([]);   
   
  const [selectedAgeRange, setSelectedAgeRange] = useState(""); 
  const [searchQuery, setSearchQuery] = useState("");

  

  useEffect(() => {             
    fetch("http://localhost:4000/toys")  
      .then(response => response.json())
      .then(data => setToys(data)); 
  }, []);


  function addNewToy(newToy) {
    fetch("http://localhost:4000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then (response => response.json())
    .then (newToyData => setToys([...toys, newToyData]));
  }

  function deleteToy(toyId) {
    fetch(`http://localhost:4000/toys/${toyId}`, {
      method: "DELETE",
    })
    .then(() => setToys(toys.filter(toy => toy.id !== toyId)));
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredToys = toys.filter(toy => // Step 3: Filter toys based on search query
    toy.name.toUpperCase().includes(searchQuery.toUpperCase())
  );
 
  return (
    

    <div className="App">
      <NavBar />
      <Header />
      <div className='search-container'>
        <input 
          type="text" 
          placeholder="Search toys..." 
          value={searchQuery} 
          onChange={handleSearchChange} // Step 4: Add search input field
        />
        <ul>
          {filteredToys.map(toy => (
            <li key={toy.id}>{toy.name}</li>
          ))}
        </ul>
      </div>
      <Outlet context={{toys: toys, addNewToy: addNewToy, deleteToy: deleteToy}} /> 
    </div>
  );
}

export default App;
