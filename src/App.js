import logo from './logo.svg';
import People from './components/People';
import Planets from './components/Planets';
import { Router, navigate } from '@reach/router';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [starWars, setStarWars] = useState("people");
  const [id, setId] = useState("0");

  const Go = e => {
    e.preventDefault();
    navigate(`/${starWars}/${id}`)
  }

  const handleSelect = e => {
    setStarWars(e.target.value);
  }

  const handeleId = e => {
    setId(e.target.value);
  }

  return (
    <div className="App">
      <form ClassName="row g-3" onSubmit={Go}>
        <div ClassName="col-auto">
          <label for="staticEmail2" ClassName="visually-hidden">Search for:</label>
          <select ClassName="visually-hidden" aria-label="Default select example" onChange={handleSelect}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div ClassName="col-auto">
          <label for="inputPassword2" ClassName="visually-hidden">ID:</label>
          <input type="text" ClassName="form-control" id="inputPassword2" placeholder="" onChange={handeleId} value={id} name="input" />
        </div>
        <div ClassName="col-auto">
          <input type="submit" ClassName="btn btn-primary mb-3" value="Search" />
        </div>
      </form>

      <Router>
        <People path='/people/:id' />
        <Planets path='/planets/:id' />
      </Router>

    </div>
  );
}

export default App;
