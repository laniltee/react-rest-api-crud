import React from 'react';
import AddToDo from "./components/AddToDo";
import AllToDos from "./components/AllToDos";

function App() {
  return (
    <div className="App">
      <h1>Lanil ToDo App</h1>
      <h2>Aka REST API Tutorial with React.JS and AXIOS</h2>
      <div>
        <h2>Add New ToDo</h2>
        <AddToDo/>
      </div>
      <div>
        <h2>All ToDos </h2>
        <AllToDos/>
      </div>
    </div>
  );
}

export default App;
