import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Sidebar from './components/Sidebar/Sidebar';
import React from 'react';

function App() {
  const [selection, setSelected] = React.useState([]);
  const handleAddToSelection = (player) =>{
      const newSelection = [...selection, player];
      setSelected(newSelection)
  }

  return (
    <>
      <Header></Header>
      <main className="container my-5">
        <div className= "row">
          <Players handleAddToSelection = {handleAddToSelection} ></Players>
          <Sidebar selection = {selection}></Sidebar>
        </div>
      </main>
    </>
  );
}

export default App;
