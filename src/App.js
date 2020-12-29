import './App.css';
import Form from './form/form';
import Todos from './todolist/todolist';
import React from "react";
import ShowStat from './todostatistic/todostat';

function App() {
  return (
<React.Fragment> 
    <Form />
    <Todos />
    <ShowStat/>
    </React.Fragment>
  
  );
}

export default App;
