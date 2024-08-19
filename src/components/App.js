import { useState, useEffect } from 'react';   
import NavBar from './NavBar';
import Header from './Header';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';  


function App() {  
  const [toys, setToys] = useState([]); 
  const [searchText, setSearchText] = useState("");  

  useEffect(() => {             
    fetch("http://localhost:4000/toys")  
      .then(response => response.json())
      .then(data => setToys(data)); 
  }, []);

  const filteredToys = toys.filter(toy => {
    return toy.name.toUpperCase().includes(searchText.toUpperCase());
  })
  
  function updateSearchText(event) {
    setSearchText(event.target.value);
  }

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
  
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Outlet context={{toys: filteredToys, addNewToy: addNewToy, deleteToy: deleteToy, updateSearchText: updateSearchText, searchText: searchText}} /> 
    </div>
  );
}

export default App;
