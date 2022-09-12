import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {useState} from 'react'
import AllPets from './components/AllPets'
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';


function App() {
  const [pets,setPets]= useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<Navigate to="/pets" />} path="/" />
        <Route element={< AllPets pets={pets} setPets={setPets} />} path="/pets" />
        <Route element={< AddPet pets={pets} setPets={setPets}/>} path="/pets/add"/>
        <Route element={< EditPet pets={pets} setPets={setPets}/>} path="/pets/edit/:id"/>
        <Route element={< OnePet pets={pets} setPets={setPets} />} path="/pets/:id" />        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
